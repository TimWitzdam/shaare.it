---
title: "Why merge returns an empty DataFrame: dtype mismatch in keys"
description: "Merging DataFrames with different dtypes in the key column often returns an empty DataFrame—explain why and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## Merge returns empty due to different dtypes (no exception)

```bash
$ python - <<'PY'
import pandas as pd

left = pd.DataFrame({'id': [1, 2, 3], 'v': [10, 20, 30]})
right = pd.DataFrame({'id': ['1', '2', '4'], 'w': [100, 200, 400]})
merged = left.merge(right, on='id')
print(merged)
PY
Empty DataFrame
Columns: [id, v, w]
Index: []
```

### Why this happens

`merge` matches values exactly, and dtype mismatches (e.g., integers versus strings) lead to no matches. It can silently return an empty DataFrame rather than raising an exception, which is a frequent source of subtle bugs.

### Fix

Cast keys to a common dtype before merging (`astype(str)` or `astype(int)`), or clean data to have consistent types.

#### Wrong code

```python
# str/int mismatch -> returns empty result
df = left.merge(right, on='id')
```

#### Fixed code

```python
# Option 1: Convert both keys to string
df = left.astype({'id': str}).merge(right.astype({'id': str}), on='id')

# Option 2: Convert both keys to numeric when appropriate
left['id'] = pd.to_numeric(left['id'], errors='coerce')
right['id'] = pd.to_numeric(right['id'], errors='coerce')
df = left.merge(right, on='id')

# Option 3: Inspect keys and types before merging
print(left['id'].dtype, right['id'].dtype)
print(left['id'].unique(), right['id'].unique())
```

Always check dtypes and sample values from both frames if a merge returns empty or unexpected results.
