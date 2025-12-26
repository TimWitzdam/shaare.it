---
title: "TypeError: Object of type 'Timestamp' is not JSON serializable"
description: "Pandas Timestamp objects aren't JSON serializable by default — how to convert dates or provide a custom serializer."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: Object of type 'Timestamp' is not JSON serializable

```bash
$ python - <<'PY'
import pandas as pd, json

d = {'date': pd.Timestamp('2020-01-01')}
print(json.dumps(d))
PY
Traceback (most recent call last):
  File "<string>", line 4, in <module>
TypeError: Object of type Timestamp is not JSON serializable
```

### Why this happens

The standard library `json` module can only serialize a small set of built-in types (numbers, strings, lists, dicts, etc.). Pandas' `Timestamp` is a custom type and isn't automatically supported by `json.dumps`.

### Fix

Convert `Timestamp` objects to a built-in type first (e.g., `str` or UNIX timestamp), or provide a custom `default` serializer to `json.dumps`.

#### Wrong code

```python
import pandas as pd, json

payload = {'date': pd.Timestamp('2020-01-01')}
json.dumps(payload)  # raises TypeError
```

#### Fixed code (convert to ISO string)

```python
import pandas as pd, json

payload = {'date': pd.Timestamp('2020-01-01').isoformat()}
json.dumps(payload)  # works: {"date": "2020-01-01T00:00:00"}
```

#### Fixed code (custom default serializer)

```python
import pandas as pd, json

def default(o):
    if isinstance(o, pd.Timestamp):
        return o.isoformat()
    raise TypeError(f"Object of type {type(o)} is not JSON serializable")

payload = {'date': pd.Timestamp('2020-01-01')}
json.dumps(payload, default=default)
```

Notes:

- If you need numeric timestamps: use `int(ts.timestamp())`.
- For `DataFrame.to_json`, pandas has built-in support for converting DateTimes to ISO strings or epoch times via `date_format` and `date_unit` options.
