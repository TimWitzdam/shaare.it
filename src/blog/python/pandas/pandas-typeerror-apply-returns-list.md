---
title: "TypeError/ValueError: DataFrame.apply returns list with wrong shape"
description: "When your apply function returns lists or inconsistent shapes, assignment can fail — here's why and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError/ValueError: DataFrame.apply returns list with wrong shape

```bash
$ python - <<'PY'
import pandas as pd
df = pd.DataFrame({'a': [1, 2]})
df[['b', 'c']] = df['a'].apply(lambda x: [x] if x == 1 else [x, x**2])
PY
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: Wrong number of items passed 1, placement implies 2
```

### Why this happens

`apply` can return arbitrary objects — scalars, lists, tuples — per row. When you attempt to assign the result to multiple columns, pandas expects each returned item to have the same length. If the returned sequences vary in length (or the function returns a scalar for some rows and a sequence for others), pandas cannot reshape the result and raises a `ValueError` (or `TypeError` for incompatible assignments).

### Fix

Make sure the function returns consistent-width sequences for each row. If needed, expand lists into their own DataFrame first with `tolist()` and construct a new DataFrame, or use `pd.Series`/`pd.DataFrame` during assignment.

#### Wrong code

```python
import pandas as pd
df = pd.DataFrame({'a': [1, 2]})
# Inconsistent return lengths => assignment fails
df[['b', 'c']] = df['a'].apply(lambda x: [x] if x == 1 else [x, x**2])
```

#### Fixed code

```python
import pandas as pd
df = pd.DataFrame({'a': [1, 2]})
# Return a consistent-length list for each row
df[['b', 'c']] = df['a'].apply(lambda x: [x, x**2]).tolist()

# Or explicitly construct a DataFrame from the list-of-lists
expanded = pd.DataFrame(df['a'].apply(lambda x: [x, x**2]).tolist(), index=df.index, columns=['b', 'c'])
df[['b', 'c']] = expanded
```

If you can't guarantee the length, use `pd.Series` to keep a column of lists, or normalize the output first:

```python
df['pair'] = df['a'].apply(lambda x: [x] if x == 1 else [x, x**2])
```

Then handle each case explicitly, or filter before assigning:

```python
mask = df['pair'].apply(lambda x: len(x) == 2)
df.loc[mask, ['b', 'c']] = pd.DataFrame(df.loc[mask, 'pair'].tolist(), index=df.loc[mask].index)
```
