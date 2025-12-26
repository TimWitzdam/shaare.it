---
title: "TypeError: cannot unpack non-iterable int object"
description: "Unpack errors when iterating or assigning multiple variables expecting iterables from scalar values in Pandas workflows."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: cannot unpack non-iterable int object

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}); [print(x,y) for x, y in df['a']]"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: cannot unpack non-iterable int object
```

### Why this happens

This TypeError occurs when your code expects each element to be an iterable (like a tuple) but the elements are scalars. When you iterate over a Series, each element is a single value—attempting to unpack it into multiple variables fails.

### Fix

Use the correct iterator that yields tuples (e.g., `.itertuples()`, `.iterrows()`), or iterate over multiple Series simultaneously with `zip()`.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# Attempt to unpack scalar values -> TypeError
for x, y in df['a']:
    print(x, y)
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2], 'b': [10, 20]})
# Iterate over a DataFrame's rows as tuples
for idx, row in df.iterrows():
    print(row['a'], row['b'])

# Or use itertuples for better performance
for a, b in df.itertuples(index=False):
    print(a, b)

# If iterating over two Series in parallel, use zip
for a, b in zip(df['a'], df['b']):
    print(a, b)
```
