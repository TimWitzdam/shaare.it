---
title: "ValueError: cannot reindex from a duplicate axis (resample/reindex issues)"
description: "Why `ValueError: cannot reindex from a duplicate axis` occurs when reindexing or resampling with a duplicated index and how to resolve it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: cannot reindex from a duplicate axis

```bash
$ python - <<'PY'
import pandas as pd

df = pd.DataFrame({'key': [1, 1, 2], 'val': [10, 20, 30]})
# set a duplicate index and try to reindex
df2 = df.set_index('key')
# this call tries to reindex on an axis that contains duplicate labels
df2.reindex([1, 2, 3])
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: cannot reindex from a duplicate axis
```

### Why this happens

Pandas `reindex` needs a unique index to map values for the new labels. If the existing index contains duplicates, pandas cannot create a reproducible mapping and raises `ValueError`. Similar errors can surface during `resample`, `unstack`, or other operations that rely on unique index labels.

### Fix

- Make your index unique by resetting or consolidating duplicates (e.g., `df.reset_index()`), or
- aggregate duplicates first (e.g., `df.groupby('key').agg(...)`) or
- use `drop_duplicates` or `groupby` to make the index unique before reindexing.

#### Wrong code

```python
df2 = df.set_index('key')
# error because index has duplicates
df2.reindex([1, 2, 3])
```

#### Fixed code

```python
# Option 1: reset index (treat the index as a column)
df.reset_index().reindex([1, 2, 3], level='key')

# Option 2: aggregate duplicates then reindex
dedup = df.groupby('key', as_index=True).sum()
dedup.reindex([1,2,3])

# Option 3: drop duplicates if appropriate
dedup = df.drop_duplicates(subset='key').set_index('key')
dedup.reindex([1, 2, 3])
```

If duplicates are expected and meaningful, use an operation that handles duplicates explicitly rather than reindexing directly.
