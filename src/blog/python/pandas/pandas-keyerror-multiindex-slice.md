---
title: "KeyError when slicing with MultiIndex keys"
description: "KeyError when trying to select MultiIndex tuples or when index is not a MultiIndex."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## KeyError: ('A', 'B') when slicing with MultiIndex keys

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2], 'b':[3,4]}); print(df.loc[('a','b')])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
  File "/usr/local/lib/python3.X/site-packages/pandas/core/indexing.py", line XXX, in __getitem__
    return self._getitem_tuple(key)
  File "/usr/local/lib/python3.X/site-packages/pandas/core/indexing.py", line XXX, in _getitem_tuple
    raise KeyError(key)
KeyError: ('a', 'b')
```

### Why this happens

The error occurs when you try to use a tuple indexer where the DataFrame is not using a MultiIndex, or the combination of keys does not exist in the MultiIndex. In short, the tuple is not found in the index.

### Fix

Make sure you’re indexing into a MultiIndex and that the tuple exists, or use different selection methods. If you meant columns, use `df[['a', 'b']]`, not `df.loc[('a', 'b')]`.

#### Wrong code (using tuple on a regular Index)

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})
# df has no MultiIndex, so tuple indexer fails
print(df.loc[('a', 'b')])
```

#### Fixed code

```python
import pandas as pd

# If you want both columns, use column selection
print(df[['a', 'b']])

# If you have a MultiIndex and want to select by a tuple, set it first
midx = pd.MultiIndex.from_tuples([(1, 'x'), (2, 'y')], names=['num', 'char'])
df2 = pd.DataFrame({'val': [10, 20]}, index=midx)
print(df2.loc[(1, 'x')])  # works when the tuple is present in MultiIndex
```
