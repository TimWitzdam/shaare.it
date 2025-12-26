---
title: "TypeError: unsupported operand type(s) for +: 'int' and 'str'"
description: "Mixing numeric and string types in arithmetic operations in Pandas causes TypeError."
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

Pandas uses NumPy under the hood for element-wise arithmetic. Adding columns of incompatible data types (e.g., numbers and strings) results in TypeError because Python does not define addition for those operand types.

### Fix

Convert data to compatible types before performing operations. For concatenation convert to string; for arithmetic convert strings to numeric using `astype(int)`/`pd.to_numeric` and handle errors/NaN if necessary.

#### Wrong code

```python
import pandas as pd

# Adding numeric and string columns directly

df = pd.DataFrame({'a': [1, 2], 'b': ['x', 'y']})
print(df['a'] + df['b'])  # TypeError
```

#### Fixed code

```python
import pandas as pd

# Concatenate as strings

df = pd.DataFrame({'a': [1, 2], 'b': ['x', 'y']})
print(df['a'].astype(str) + df['b'])  # ['1x', '2y']

# Or convert strings to numeric to perform arithmetic

df2 = pd.DataFrame({'a': [1, 2], 'b': ['10', '20']})
print(df2['a'] + df2['b'].astype(int))  # [11, 22]

# Use pd.to_numeric for safe conversion
pd.to_numeric(df2['b'], errors='coerce')
```
