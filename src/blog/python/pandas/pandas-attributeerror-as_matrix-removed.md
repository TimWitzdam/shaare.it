---
title: "AttributeError: DataFrame.as_matrix removed — use to_numpy()"
description: "Why calling `as_matrix()` raises AttributeError in newer pandas versions and how to migrate to `to_numpy()` or `.values`."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## AttributeError: DataFrame.as_matrix and Series.as_matrix removed

```bash
$ python - << 'PY'
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
try:
    print(df.as_matrix())
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

````

### Why this happens

`DataFrame.as_matrix()` (and `Series.as_matrix()`) was deprecated in pandas 0.23 and removed in later versions. The method was replaced by the more explicit `to_numpy()` or the attribute `values` to access the underlying NumPy array. Attempting to call `as_matrix()` in modern pandas will raise `AttributeError`.

### Fix

Use `df.to_numpy()` or `df.values` instead. `to_numpy()` is preferred as it clarifies intent and handles extension arrays.

#### Wrong code

```python
# Old code that may fail on modern pandas versions
arr = df.as_matrix()  # AttributeError: 'DataFrame' object has no attribute 'as_matrix'
```

#### Fixed code

```python
# Preferred
arr = df.to_numpy()

# Or the legacy attribute (still works but less explicit)
arr = df.values
```

#### Notes

- `to_numpy()` is the recommended approach. It works with pandas' extension arrays and preserves dtype semantics better than `.values` in some situations.
- Use `.to_numpy(copy=False)` if you want to avoid a copy when possible.
````
