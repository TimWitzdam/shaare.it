---
title: "ValueError: left_on/right_on lists must have equal length"
description: "Why `pd.merge` raises a ValueError when `left_on` and `right_on` arguments are lists of different lengths and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: left_on/right_on lists must have equal length when merging

```bash
$ python - << 'PY'
import pandas as pd

left = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
right = pd.DataFrame({'X': [1, 2]})
try:
    # left_on has 2 columns, right_on has 1 -> mismatch
    print(pd.merge(left, right, left_on=['A','B'], right_on=['X']))
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

When you pass `left_on` and `right_on` as lists, they are treated as parallel composite keys — the number of elements must match. Pandas needs to pair each left key with a corresponding right key. If the numbers differ, pandas raises a `ValueError` because there's no one-to-one mapping between key positions.

### Fix

- Make sure `left_on` and `right_on` have the same number of keys.
- If you only want to merge on a single column from one side, specify just that column and omit the other list, or repeat it appropriately.

#### Wrong code

```python
left = pd.DataFrame({'A': [1, 2], 'B': [3, 4]})
right = pd.DataFrame({'X': [1, 2]})
# left_on has 2 items, right_on has 1 -> ValueError
pd.merge(left, right, left_on=['A', 'B'], right_on=['X'])
```

#### Fixed code

```python
# 1) Merge with one key from the left and one from the right
pd.merge(left, right, left_on=['A'], right_on=['X'])
# or
# 2) Provide matching-length lists
right = pd.DataFrame({'X': [1, 2], 'Y': [3, 4]})
pd.merge(left, right, left_on=['A', 'B'], right_on=['X', 'Y'])
```
