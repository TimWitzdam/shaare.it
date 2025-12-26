---
title: "TypeError: unsupported operand type(s) for +: 'int' and 'str'"
description: "When arithmetic operations mix incompatible dtypes (e.g., int and str) and raise a TypeError."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: unsupported operand type(s) for +: 'int' and 'str'

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2], 'b':['x','y']}); print(df['a'] + df['b'])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

### Why this happens

Pandas arithmetic operations are applied element-wise. If one column is numeric and the other contains strings, Python cannot add an integer to a string and raises a `TypeError`.

### Fix

Convert columns to compatible types before performing arithmetic. Use `astype`, `pd.to_numeric`, or format strings appropriately.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2], 'b': ['x', 'y']})
# Raises TypeError
print(df['a'] + df['b'])
```

#### Fixed code

```python
import pandas as pd

# Convert both to strings if concatenation intended
print(df['a'].astype(str) + df['b'])

# Or convert b to numeric if it contains numeric strings
# df['b'] = pd.to_numeric(df['b'], errors='coerce')
# print(df['a'] + df['b'])
```
