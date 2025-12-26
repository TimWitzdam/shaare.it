---
title: "ValueError: Transform returned wrong shaped result for groupby.transform"
description: "Why groupby.transform must return a result with the same length as the input and how to fix shape mismatches."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: Length of values does not match length of index (groupby.transform)

```bash
$ python - <<'PY'
import pandas as pd

df = pd.DataFrame({'g': [1,1,2], 'v': [10, 20, 30]})
# transform function returns a list of length 2 for a group of length 3
df.groupby('g')['v'].transform(lambda x: [1, 2])
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Length of values (2) does not match length of index (3)
```

### Why this happens

`groupby.transform` expects the function to return a result aligned to the original group's index. For each group `x`, `transform` requires a result of the same length as `x` (either a scalar broadcastable to the group, or an array/list with length equal to `len(x)`). Returning a result of a different shape causes a mismatch and raises `ValueError`.

### Fix

Return a scalar (so it broadcasts to each item in the group) or return an array/list of the same length as the group. If you need a per-group summary that reduces the group, use `groupby().agg()` or `groupby().apply()` instead.

#### Wrong code

```python
# returns a shorter list by mistake
df.groupby('g')['v'].transform(lambda x: [1, 2])
```

#### Fixed code

```python
# Return a scalar to broadcast
df.groupby('g')['v'].transform('mean')

# Or return a list with the same length as the group
df.groupby('g')['v'].transform(lambda x: [x.mean()] * len(x))

# If you intend a reduced result per group, use agg/apply
df.groupby('g')['v'].agg('mean')
```

When building custom transforms, use `len(x)` to ensure the returned list/array matches the input group length, or return a scalar to broadcast.
