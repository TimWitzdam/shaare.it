---
title: "AttributeError / TypeError: using regex replace on non-string columns"
description: "Why `.str.replace` or regex-backed replace operations fail on non-string columns and how to fix by converting to string or using a safe replace."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## AttributeError / TypeError: regex-based replacement on non-string dtypes

```bash
$ python - << 'PY'
import pandas as pd

s = pd.Series([10, 20, 30])
try:
    print(s.str.replace(r'\d', 'x', regex=True))
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

The `.str` accessor is only available for string-like values. If a Series has a numeric dtype, `.str` will raise an `AttributeError` like `Can only use .str accessor with string values, which use dtype 'object'`. Similarly, `str.replace` or regex operations applied on non-string types will fail or produce unexpected results.

### Fix

- Convert the column to string: `df['col'].astype(str).str.replace(...)`.
- Use `pd.to_numeric` and vectorized numeric operations when you want numeric transformations, not string regex.
- When using `replace(..., regex=True)` on a DataFrame, it can work even on non-string dtypes, but use `astype(str)` when needed.

#### Wrong code

```python
s = pd.Series([10, 20, 30])
# AttributeError: .str accessor only for string dtypes
s.str.replace(r'\d', 'x', regex=True)
```

#### Fixed code

```python
s = pd.Series([10, 20, 30])
# Convert to string first
s_str = s.astype(str)
s_str.replace(r'\d', 'x', regex=True)

# Or use numeric transform if you need numeric math
s + 1  # just an example of numeric operation
```

If you want to apply a regex-based transformation to a DataFrame's column with mixed types, convert it to strings first or filter to string-like values only.
