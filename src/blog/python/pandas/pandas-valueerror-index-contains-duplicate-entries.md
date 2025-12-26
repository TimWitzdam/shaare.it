---
title: "ValueError: Index contains duplicate entries, cannot reshape"
description: "What causes reshape/pivot/unstack errors due to duplicate index entries and how to resolve or aggregate them."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: Index contains duplicate entries, cannot reshape

```bash
$ python - <<'PY'
import pandas as pd

df = pd.DataFrame({
    'id': [1, 1],
    'key': ['A', 'A'],
    'val': [10, 20]
})

# pivot fails because there are duplicate combinations for index/key
pd.pivot(df, index='id', columns='key', values='val')
PY
Traceback (most recent call last):
  File "<string>", line 12, in <module>
ValueError: Index contains duplicate entries, cannot reshape
```

### Why this happens

`pivot` and `unstack` require a unique mapping from index/columns to values. If there are duplicate rows for the same index/column combination, pandas can't reshape the table without deciding how to aggregate the multiple values.

### Fix

- Use `pivot_table(..., aggfunc='mean')` or similar to aggregate duplicates.
- Remove or combine duplicate rows first (e.g., with `groupby(...).sum()` or `drop_duplicates`).
- If duplicates are legitimate but you want them kept, avoid `pivot` and use `groupby` or `crosstab` with appropriate aggregation.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({
    'id': [1, 1],
    'key': ['A', 'A'],
    'val': [10, 20]
})

# This raises ValueError due to duplicate index/key pairs
pd.pivot(df, index='id', columns='key', values='val')
```

#### Fixed code (using pivot_table with aggfunc)

```python
import pandas as pd

df = pd.DataFrame({
    'id': [1, 1],
    'key': ['A', 'A'],
    'val': [10, 20]
})

# Aggregate duplicates with pivot_table
res = pd.pivot_table(df, index='id', columns='key', values='val', aggfunc='sum')
print(res)

# Or remove duplicates first
res2 = df.groupby(['id', 'key'], as_index=False).agg({'val': 'sum'}).pivot(index='id', columns='key', values='val')
print(res2)
```

Notes:

- `pivot` is strict and requires unique index/column pairs. `pivot_table` allows aggregation to handle duplicates.
- Inspect duplicates using `df.duplicated()` and `df.groupby(['id', 'key']).size()`.
