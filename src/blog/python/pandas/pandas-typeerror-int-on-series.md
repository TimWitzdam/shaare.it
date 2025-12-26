---
title: "TypeError: int() argument must be a string or number, not 'Series'"
description: "Why calling int() on a `pandas.Series` raises TypeError and how to extract scalar values correctly."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: int() argument must be a string, a bytes-like object or a number, not 'Series'

```bash
$ python - << 'PY'
import pandas as pd

s = pd.Series([1, 2])
try:
    print(int(s))
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

`int()` expects a scalar (a single number or string convertible to a number). A `pandas.Series` represents a vector; you cannot convert the entire vector to a single integer directly. This also occurs if you inadvertently pass a Series to functions that expect scalars (e.g., `int`, `float`, or library functions that expect a single value).

### Fix

Extract a scalar from the Series (for example using `.iloc[0]`, `.iat[0]`, `.item()` if there's just one element), or convert the Series to the desired shape (list/NumPy array) before applying scalar conversions. For bulk conversion, use `Series.astype(int)`.

#### Wrong code

```python
s = pd.Series([1, 2])
val = int(s)  # TypeError
```

#### Fixed code — extracting a single element

```python
# If you really need a single int from a one-element Series
s = pd.Series([42])
val = int(s.iloc[0])  # 42
# Or use item() if Series has a single element
val = s.item()
```

#### Fixed code — convert entire Series to integers

```python
# To convert all items in the Series to ints
s_int = s.astype(int)
# or convert to a list of ints
s_list = s.astype(int).tolist()
```

Make sure you are not passing full Series into scalar functions; if a scalar is needed, extract it explicitly or use vectorized operations.
