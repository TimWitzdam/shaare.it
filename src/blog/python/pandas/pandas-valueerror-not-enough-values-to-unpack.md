---
title: "ValueError: not enough values to unpack"
description: "Unpacking sequence elements to multiple variables but receiving fewer items than expected in Pandas loops and apply results."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: not enough values to unpack (expected X, got Y)

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2], 'b':[3,4]}); [print(a,b,c) for a,b,c in df.itertuples(index=False, name=None)]"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: not enough values to unpack (expected 3, got 2)
```

### Why this happens

This error is raised when you attempt to unpack a sequence into more variables than the sequence provides. In pandas, this often happens when unpacking rows or the results of a function that returns fewer elements than you expect.

### Fix

Make sure the function returns the correct number of values, or unpack to the proper number of variables. For iterating over rows, use `itertuples()` or `iterrows()` properly and match the tuple length.

#### Wrong code

```python
import pandas as pd

# DataFrame with 2 columns; tuple length is 2

df = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})

# Attempt to unpack 3 variables -> ValueError
for a, b, c in df.itertuples(index=False, name=None):
    print(a, b, c)
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})

# Match the number of variables to the tuple length
for a, b in df.itertuples(index=False, name=None):
    print(a, b)

# If you need an extra value, compute or return it explicitly before unpacking

# Example: a function that returns 3 values per row

def triple_values(row):
    return row['a'], row['b'], row['a'] + row['b']

for x, y, z in map(triple_values, df.itertuples(index=False, name=None)):
    print(x, y, z)
```
