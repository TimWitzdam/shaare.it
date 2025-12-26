---
title: "TypeError: json_normalize input must be a list/dict"
description: "Why pandas.json_normalize fails if you pass non-list/dict inputs and how to massage the input into the correct format."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError / AttributeError: pass a list/dict to json_normalize

```bash
$ python - <<'PY'
import pandas as pd

# wrong input type (a plain string rather than a dict or list of dicts)
pd.json_normalize('not-a-dict')
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: Expected list or dict-like object, got str
```

### Why this happens

`pandas.json_normalize` expects a dictionary or a list of dictionaries. Passing scalars like strings or a list containing scalars (or nested non-dict structures) will cause type errors because `json_normalize` tries to treat items as dicts.

### Fix

Wrap your scalar/dict into a list or convert your JSON string to dict using the `json` module, then call `json_normalize`.

#### Wrong code

```python
# Passing a JSON string directly
pd.json_normalize('{"a": 1, "b": 2}')

# Passing a list with non-dict items
pd.json_normalize(['not-a-dict'])
```

#### Fixed code

```python
# 1) Parse JSON string to dict first
import json
obj = json.loads('{"a": 1, "b": 2}')
pd.json_normalize(obj)

# 2) Use a list of dicts as input
data = [{'a': 1, 'b': 2}, {'a': 3, 'b': 4}]
pd.json_normalize(data)

# 3) When you have nested JSON strings, apply json.loads then call json_normalize
raw = '[{"a": 1, "b": {"c": 2}}]'
parsed = json.loads(raw)
pd.json_normalize(parsed)
```

If you receive mixed data (some rows are strings, some are dicts), normalize first by converting strings to dicts or dropping bad rows.
