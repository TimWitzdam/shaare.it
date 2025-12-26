---
title: "ValueError: cannot mask with array containing NA / NaN values"
description: "Why boolean indexing with NA/NaN in the mask raises ValueError and how to avoid it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: cannot mask with array containing NA / NaN values

```bash
$ python - <<'PY'
import pandas as pd

df = pd.DataFrame({'a': [1, 2, 3]})
mask = pd.Series([True, pd.NA, False])
print(df[mask])
PY
Traceback (most recent call last):
  File "<string>", line 6, in <module>
ValueError: cannot mask with array containing NA / NaN values
```

### Why this happens

Pandas expects boolean masks to be strictly boolean `True`/`False`. If a mask contains `NA`/`NaN` (the pandas `NA` or `numpy.nan`), pandas can't decide whether to keep or drop the corresponding rows, so it raises this error.

### Fix

Make sure your mask has no missing values. Convert `NA`/`NaN` to a boolean (usually `False`) using `.fillna(False)` or `mask.notna()` depending on intent. Also ensure dtype is boolean with `.astype(bool)` where needed.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2, 3]})
mask = pd.Series([True, pd.NA, False])
print(df[mask])  # ValueError
```

#### Fixed code

```python
import pandas as pd

# Convert NA to False, then use as mask
mask = pd.Series([True, pd.NA, False]).fillna(False).astype(bool)
print(df[mask])  # no error

# Or drop NA values explicitly
mask = pd.Series([True, pd.NA, False])
print(df[mask.fillna(False)])
```

Notes:

- If your mask was created via `.isin()` or comparisons that yield `NA`, handle `NA` values using `fillna` or `notna()` before indexing.
