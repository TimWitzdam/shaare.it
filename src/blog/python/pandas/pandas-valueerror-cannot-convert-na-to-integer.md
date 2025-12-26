---
title: "ValueError: Cannot convert non-finite values (NA or inf) to integer"
description: "Why casting nullable floats with NaN to int raises a ValueError and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: Cannot convert non-finite values (NA or inf) to integer

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1, None, 3]}); df['a'].astype(int)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Cannot convert non-finite values (NA or inf) to integer
```

### Why this happens

Numpy integer dtypes don't support NaN/None values. Pandas columns containing NaN are usually of float dtype. Converting them to a numpy-backed int dtype with `astype(int)` causes this ValueError because integers cannot represent missing values.

### Fix

Use Pandas' nullable integer type `Int64` (capital I) if you need integers that support missing values: `df['a'].astype('Int64')`. Otherwise, fill or drop missing values before converting: `df['a'].fillna(0).astype(int)`.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, None, 3]})
# This will raise ValueError
print(df['a'].astype(int))
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, None, 3]})
# Use nullable integer dtype
print(df['a'].astype('Int64'))

# Or fill missing values and cast to int
print(df['a'].fillna(0).astype(int))
```
