---
title: "KeyError: Index/level name not found"
description: "Why KeyError arises when trying to access a non-existent index level or pivot key and how to resolve it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## KeyError: Index/level name not found

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'A':[1,2],'B':[3,4]}); df.set_index('A', inplace=True); df.index.get_level_values('B')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
  File "/usr/local/lib/python3.X/site-packages/pandas/core/indexes/base.py", line NNN, in get_level_values
    raise KeyError(key)
KeyError: 'B'
```

### Why this happens

This error occurs when you attempt to access an index level or column that doesn't exist. In the example above, `B` is still a column (not an index level), so trying to get it from the index raises a `KeyError`.

### Fix

Check what the DataFrame's index levels are using `df.index.names` or `df.columns`. If you meant to use a column, access it as a column; if you want `B` as an index level, set it with `set_index` or use `df.reset_index()` if it is currently an index.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
# This raises KeyError because 'B' is not an index level
df.set_index('A', inplace=True)
print(df.index.get_level_values('B'))
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
# Use the column directly
print(df['B'])

# Or make B an index level first
df2 = df.set_index(['A', 'B'])
print(df2.index.names)
print(df2.index.get_level_values('B'))
```
