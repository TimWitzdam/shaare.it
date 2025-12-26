---
title: "KeyError / TypeError: Selecting rows in MultiIndex with tuple syntax"
description: "Why using tuple syntax on DataFrames with MultiIndex can raise KeyError or TypeError, and how to select rows properly."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## KeyError / TypeError: Selecting rows in MultiIndex with tuple syntax

```bash
$ python - <<'PY'
import pandas as pd
idx = pd.MultiIndex.from_tuples([(1,10),(2,20)], names=['a','b'])
df = pd.DataFrame({'x': [1, 2]}, index=idx)
# Mistaken attempt to use tuple indexing on the DataFrame like df[1,10]
df[1,10]
PY
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 1
```

### Why this happens

Using `df[1,10]` is interpreted as looking up a column label `1` (then trying to index column with key `10`), not selecting by row index. With a MultiIndex, selecting a row by a tuple must use `.loc`, `.xs` (cross-section), or direct tuple indexing on `.loc`. Without `.loc` or `.xs`, pandas raises a `KeyError` because it interprets the tuple as chained column selectors.

### Fix

Use `.loc` with a tuple to index a row by a full multi-level key, or use `.xs` or nested `.loc` to select slices of a MultiIndex.

#### Wrong code

```python
import pandas as pd
idx = pd.MultiIndex.from_tuples([(1,10),(2,20)], names=['a','b'])
df = pd.DataFrame({'x': [1, 2]}, index=idx)
df[1,10]  # raises KeyError - parsed as column lookup not row selection
```

#### Fixed code

```python
import pandas as pd
idx = pd.MultiIndex.from_tuples([(1,10),(2,20)], names=['a','b'])
df = pd.DataFrame({'x': [1, 2]}, index=idx)

# Use .loc with a tuple for row selection
df.loc[(1, 10)]

# Or use xs to select by a level
df.xs(1, level='a')

# Or chain .loc/indexing to select nested keys
df.loc[1].loc[10]
```
