---
title: "ValueError: orient mismatch when using pd.read_json"
description: "How `pd.read_json` raises errors when the provided JSON doesn't match the expected `orient` (for example, records vs split) and how to detect & fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: orient mismatch when calling `pd.read_json`

```bash
$ python - << 'PY'
import pandas as pd
from io import StringIO

# This JSON is in 'split' orient (columns/data)
json_str = '{"columns": ["A", "B"], "data": [[1, 2], [3, 4]]}'
try:
    # reading with the wrong orient triggers an error
    print(pd.read_json(StringIO(json_str), orient='records'))
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

`pd.read_json` expects the structure of the JSON to match the `orient` parameter you pass. The common `orient` values are `records`, `columns`, `index`, `split`, and `values`. If the JSON doesn't match the chosen `orient`, pandas can't interpret it in the expected way and raises a `ValueError`.

Typical mismatches:

- `records` expects a list of objects/dicts: `[{'A':1,'B':2}, {...}]`.
- `split` expects a dict with `columns` and `data` keys.
- `columns` expects nested structure: `{"col1": {...}}`.

### Fix

Inspect the JSON shape and choose the correct `orient` when calling `pd.read_json`, or transform the JSON into the expected shape before reading.

#### Wrong code

```python
# JSON in 'split' format but using records orient
pd.read_json(StringIO(json_str), orient='records')  # ValueError
```

#### Fixed code

```python
# Specify the correct orient
pd.read_json(StringIO(json_str), orient='split')

# Or put JSON in records format
json_records = '[{"A": 1, "B": 2}, {"A": 3, "B": 4}]'
pd.read_json(StringIO(json_records), orient='records')
```

If you receive unknown JSON, parse it with `json.loads` and check its structure before calling `pd.read_json` to determine the correct `orient`.
