---
title: "ValueError / JSONDecodeError when reading JSON lines with pd.read_json"
description: "What happens when you try to read newline-delimited JSON with pd.read_json without passing lines=True, or when the JSON is malformed."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError / JSONDecodeError when calling pd.read_json on newline-delimited JSON (NDJSON)

```bash
$ python - << 'PY'
import pandas as pd
from io import StringIO

ndjson = '{"a": 1}\n{"a": 2}\n'
try:
    # by default pandas expects a single JSON array or a single JSON object
    print(pd.read_json(StringIO(ndjson)))
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

Pandas' `pd.read_json` expects a JSON string that is either a JSON array (e.g., `[{"a":1},{"a":2}]`) or a single JSON object. Newline-delimited JSON (also known as NDJSON or JSON Lines) where each line is a separate JSON object requires `lines=True`. If you pass newline-delimited JSON without the `lines=True` flag, the parser will try to read one JSON object and then find "extra" data (the next line), which leads to a `ValueError` or `json.decoder.JSONDecodeError` depending on the version of Python / pandas in use.

### Fix

Pass `lines=True` to `pd.read_json()` when reading newline-delimited JSON. Alternatively, if your input is a single JSON array, make sure the file contains the array (surrounded by `[]`) and use the default behavior.

#### Wrong code

```python
from io import StringIO
import pandas as pd

ndjson = '{"a": 1}\n{"a": 2}\n'
pd.read_json(StringIO(ndjson))  # ValueError / JSONDecodeError
```

#### Fixed code

```python
from io import StringIO
import pandas as pd

ndjson = '{"a": 1}\n{"a": 2}\n'
# Use lines=True for newline-delimited JSON
print(pd.read_json(StringIO(ndjson), lines=True))
```

If your JSON is malformed (trailing commas, partial objects), validate/clean it before reading. When reading from files with mixed content use `open(...).read().splitlines()` and parse each line with `json.loads` if you need more control.
