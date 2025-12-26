---
title: "ValueError: Must have equal len keys and value when assigning columns"
description: "Why you get `ValueError` when assigning multiple columns with list-like values of the wrong shape, and how to fix with correct shapes or DataFrame construction."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: Must have equal len keys and value when assigning to multiple columns

```bash
$ python - << 'PY'
import pandas as pd

# Attempt to assign a list-like of wrong shape to multiple columns
try:
    df = pd.DataFrame({'a': [1, 2]})
    # Trying to assign a list of lists where each inner list is length 1 into 2 columns
    df[['b', 'c']] = [[10], [20]]
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

When assigning to multiple columns at once (e.g., `df[['b', 'c']] = ...`) pandas expects the right-hand side to have a matching shape: either a DataFrame with the same number of rows and the same number of columns, or an array-like whose length matches one dimension correctly. If the shapes are mismatched, pandas raises a `ValueError` like `Must have equal len keys and value`.

### Fix

- Provide an ndarray/DataFrame with the correct shape: `(n_rows, n_cols)`.
- If you have a list of lists, convert it to a DataFrame with correct orientation (rows vs columns).
- If you intended to broadcast a single column across many new columns, repeat values or use vectorized assignment.

#### Wrong code

```python
# Wrong: inner lists length doesn't match number of columns
df[['b', 'c']] = [[10], [20]]  # Raises ValueError
```

#### Fixed code — use a DataFrame

```python
# Provide a DataFrame with the same number of rows and columns
df[['b', 'c']] = pd.DataFrame([[10, 100], [20, 200]], index=df.index)
```

#### Fixed code — broadcast a scalar or single column

```python
# If you meant the same scalar for both columns
df[['b', 'c']] = 0

# If you want to split a single column into multiple columns
lens = df['a'].apply(lambda x: [x, x*10])
# Convert list-of-lists into a DataFrame and assign
expanded = pd.DataFrame(lens.tolist(), index=df.index)
expanded.columns = ['b', 'c']
df[['b', 'c']] = expanded
```

Ensure the right-hand side of the assignment is either a DataFrame with matching shape, an array-like with shape `(n_rows, n_cols)`, or a scalar/value suitable for broadcasting.
