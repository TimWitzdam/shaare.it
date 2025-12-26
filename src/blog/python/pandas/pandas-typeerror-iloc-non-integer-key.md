---
title: "TypeError: iloc requires integer positions"
description: "When using .iloc with non-integer keys or label-based indexing; `.iloc` is position-only."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: iloc requires integer positions (non-integer key)

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}); df.iloc['a']"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: cannot do positional indexing with a non-integer key
```

### Why this happens

`.iloc` is for integer-location based indexing. Using a string (label) or non-integer indexer with `.iloc` doesn't make sense because `.iloc` selects by integer position, not label names.

### Fix

Use `.loc` when you want label-based selection, or use integer positions with `.iloc` (integers, slices, lists/arrays of integers). Convert labels to integer positions using `.get_loc` on the index if needed.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [10, 20]}, index=['x', 'y'])
# Using a label with iloc -> TypeError

val = df.iloc['x']
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'a': [10, 20]}, index=['x', 'y'])
# Use label-based selection with .loc
val = df.loc['x']

# Or use integer positions with .iloc
val0 = df.iloc[0]

# If you need to translate a label to integer position
pos = df.index.get_loc('x')
val_using_pos = df.iloc[pos]
```
