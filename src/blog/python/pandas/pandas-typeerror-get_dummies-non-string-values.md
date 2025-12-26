---
title: "TypeError / ValueError: get_dummies with list-like or nested values in cells"
description: "Why `pd.get_dummies` fails when column values are lists, dicts or nested objects and how to normalize data before one-hot encoding."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError/ValueError when calling `pd.get_dummies` on list-like values

```bash
$ python - << 'PY'
import pandas as pd

# column contains list values
try:
    df = pd.DataFrame({'tags': [['a', 'b'], ['a'], ['c']]})
    print(pd.get_dummies(df['tags']))
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

`pd.get_dummies` expects scalar values for each cell, not lists or dicts. When you pass a column containing lists (e.g., tags), Pandas typically tries to hash the values to create dummies but lists are unhashable — you'll get `TypeError: unhashable type: 'list'` or an ambiguous result. The correct approach is to normalize the list-like values into rows or expand them into columns first.

### Fix

- Use `explode()` to expand list-like entries into multiple rows, then use `get_dummies` and aggregate back (e.g., `groupby` + `sum`).
- Or manually create multi-hot encodings using `sklearn.preprocessing` or `MultiLabelBinarizer`.

#### Wrong code

```python
# This will raise a TypeError as each cell contains a list
pd.get_dummies(df['tags'])
```

#### Fixed code — explode + get_dummies + groupby

```python
s = df.explode('tags')  # rows become ONE tag per row
dummies = pd.get_dummies(s['tags'])
# join and aggregate back to original indexing
df_out = df.join(dummies.groupby(s.index).sum())
print(df_out)
```

#### Fixed code — MultiLabelBinarizer (sklearn)

```python
from sklearn.preprocessing import MultiLabelBinarizer
mlb = MultiLabelBinarizer()
encoded = mlb.fit_transform(df['tags'])
pd.DataFrame(encoded, columns=mlb.classes_, index=df.index)
```

This normalization ensures `get_dummies` or other one-hot encoding tools receive scalar values and produces predictable outputs.
