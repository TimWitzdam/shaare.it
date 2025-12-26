---
title: "InvalidIndexError: Reindexing only valid with uniquely valued Index objects"
description: "Why InvalidIndexError occurs when reindexing with duplicate index values and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## InvalidIndexError: Reindexing only valid with uniquely valued Index objects

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}, index=['x','x']); df.reindex(['x'])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
pandas.errors.InvalidIndexError: Reindexing only valid with uniquely valued Index objects
```

### Why this happens

Some pandas operations (like `reindex`, aligning, or choosing a level in a `MultiIndex`) expect the target index values to be unique. If the index contains duplicates, pandas can't produce a deterministic mapping between the existing rows and the requested labels and raises `InvalidIndexError`.

### Fix

Ensure the index you're reindexing against is unique. You can either remove duplicates, reset the index and reindex using a unique column, or aggregate duplicates to a single value before reindexing.

#### Wrong code

```python
import pandas as pd
df = pd.DataFrame({'a': [1, 2]}, index=['x', 'x'])
# Raises InvalidIndexError when reindexing against a non-unique target
df.reindex(['x'])
```

#### Fixed code

```python
import pandas as pd
# Option 1: Make index unique by resetting it
df = pd.DataFrame({'a': [1, 2]}, index=['x', 'x']).reset_index(drop=True)
df.reindex([0])

# Option 2: Aggregate duplicates before reindexing (e.g., keep the first)
df2 = df.groupby(df.index).agg('first')
df2.reindex(['x'])
```
