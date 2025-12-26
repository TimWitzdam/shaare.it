---
title: "MergeError: Merge keys are not unique in left/right frame"
description: "Why pandas.errors.MergeError occurs when merge keys are duplicated while validate is used and how to resolve it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## pandas.errors.MergeError: Merge keys are not unique

```bash
$ python - <<'PY'
import pandas as pd
left = pd.DataFrame({'id': [1, 1, 2], 'v': [10, 20, 30]})
right = pd.DataFrame({'id': [1, 2], 'w': [100, 200]})
# validate='one_to_one' asserts both sides have unique keys for a one-to-one merge
left.merge(right, on='id', validate='one_to_one')
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
pandas.errors.MergeError: Merge keys are not unique in left frame
```

### Why this happens

Pandas checks merge key uniqueness when you pass the `validate` parameter (e.g. `one_to_one`, `one_to_many`, `many_to_one`). If the validate condition fails (for example you asserted `one_to_one` but a key appears multiple times on the left or right side), pandas raises `pandas.errors.MergeError` to indicate the join is not structurally what you expect.

### Fix

Decide whether duplicates are expected or not. If duplicates are legitimate, pick a more permissive validation (like `one_to_many`), aggregate or deduplicate the DataFrame before joining, or remove the `validate` parameter.

#### Wrong code

```python
# failing because left has duplicate keys
left.merge(right, on='id', validate='one_to_one')
```

#### Fixed code

```python
# Option 1: use a more permissive validation
left.merge(right, on='id', validate='one_to_many')

# Option 2: aggregate/deduplicate left so keys are unique
left_unique = left.drop_duplicates(subset=['id'])
left_unique.merge(right, on='id', validate='one_to_one')

# Option 3: If duplicates were unexpected, raise a helpful message or inspect
dupe_keys = left['id'][left['id'].duplicated()].unique()
print('Duplicate keys in left:', dupe_keys)
```
