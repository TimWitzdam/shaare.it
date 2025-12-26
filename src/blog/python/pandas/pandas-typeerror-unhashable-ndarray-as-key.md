---
title: "TypeError: unhashable type: 'numpy.ndarray' when using arrays as keys"
description: "Why passing NumPy arrays or list-like objects as index/keys in groupby/set_index causes `TypeError: unhashable type: 'numpy.ndarray'` and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: unhashable type: 'numpy.ndarray' when grouping or indexing

```bash
$ python - << 'PY'
import pandas as pd
import numpy as np

# Each row contains a numpy array in the key column
df = pd.DataFrame({
    'key': [np.array([1, 2]), np.array([1, 2])],
    'value': [10, 20]
})
try:
    print(df.groupby('key').sum())
except Exception as e:
    print(type(e).__name__ + ':', e)
PY
```

### Why this happens

DataFrame grouping (and many other operations like `set_index`) require hashable keys for labels. NumPy arrays and Python lists are mutable and aren't hashable; trying to use them as keys for grouping or indexing raises `TypeError: unhashable type: 'numpy.ndarray'` or `unhashable type: 'list'`.

### Fix

- Convert the list/array into a tuple (hashable) if the identity of the array should be preserved: `tuple(x)`.
- Convert arrays into a string or a bytes key: `json.dumps(x.tolist())` or `str(x.tolist())`.
- Normalize the data to a hashable representation before setting it as an index or grouping key.

#### Wrong code

```python
# Using numpy arrays/list-likes directly as keys in grouping
df.groupby('key').sum()  # TypeError: unhashable type: 'numpy.ndarray'
```

#### Fixed code - convert to tuple

```python
# Make the key hashable by converting arrays to tuples
df['key_hashable'] = df['key'].apply(lambda x: tuple(x) if x is not None else None)
print(df.groupby('key_hashable').sum())
```

#### Fixed code - convert to string (avoid if ordering matters)

```python
df['key_str'] = df['key'].apply(lambda x: ','.join(map(str, x)))
print(df.groupby('key_str').sum())
```

Notes:

- Choose a hashable representation that preserves the semantics you need (tuples preserve order and contents, strings are easy to read but may collide if not designed carefully).
- If you only need to match values strictly, consider using `pd.Series.apply(tuple)` or `df['key'].map(lambda x: tuple(x))` to convert once.
