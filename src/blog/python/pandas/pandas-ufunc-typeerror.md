---
title: "UFuncTypeError: ufunc '...' did not contain a loop with signature matching types"
description: "Why NumPy ufunc errors happen inside pandas operations (mixed or incompatible dtypes) and how to resolve them."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## UFuncTypeError: ufunc 'add' did not contain a loop with signature matching types

```bash
$ python -c "import pandas as pd; import numpy as np; s = pd.Series([pd.Timestamp('2020-01-01'), 'foo']); s + pd.Timedelta(days=1)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: ufunc 'add' did not contain a loop with signature matching types
```

### Why this happens

NumPy universal functions (ufuncs) like `add`, `multiply`, etc. work with specific, supported numeric or datetime types. If you attempt to operate on mixed dtypes (for example datetime values and strings, or objects that NumPy doesn't know how to add), NumPy can't find an implementation and raises `UFuncTypeError` (or a `TypeError` which may come from the ufunc). In pandas, this commonly happens when columns have dtype `object` containing mixed types.

### Fix

Ensure operands have compatible dtypes before the operation. Convert columns to the correct dtype with `pd.to_datetime`, `astype` or replace/clean values that violate expected types. Alternatively, handle the mixed types explicitly with `np.where`, `Series.apply`, or try/except conversions.

#### Wrong code

```python
import pandas as pd
from datetime import timedelta
df = pd.DataFrame({'date': [pd.Timestamp('2020-01-01'), 'bad_date']})
# Mixed dtypes: one element is a string 'bad_date', adding a Timedelta raises the ufunc error.
df['date'] + pd.Timedelta(days=1)
```

#### Fixed code

```python
import pandas as pd
df = pd.DataFrame({'date': [pd.Timestamp('2020-01-01'), '2020-01-02']})
# Make sure the column is datetime-aware (coerce errors to NaT if needed)
df['date'] = pd.to_datetime(df['date'], errors='coerce')
df['date'] + pd.Timedelta(days=1)
```

Or, if the column is supposed to contain mixed, non-date values, handle the non-datetime cases before applying the timedelta:

```python
df['date_plus_1'] = df['date'].apply(lambda x: x + pd.Timedelta(days=1) if pd.notnull(x) and isinstance(x, pd.Timestamp) else None)
```
