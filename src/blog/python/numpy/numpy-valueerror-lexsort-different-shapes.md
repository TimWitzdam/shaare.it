---
title: "ValueError: keys must be 1-D and of the same length for np.lexsort"
description: "np.lexsort requires that all key arrays be 1-D and the same length (number of rows)."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: keys must be 1-D and of the same length for np.lexsort

```bash
$ python - <<'PY'
import numpy as np
keys = (np.array([1,2,3]), np.array([1,2]))
np.lexsort(keys)
PY
Traceback (most recent call last):
  File "<string>", line 4, in <module>
ValueError: all keys must have the same length
```

### Why this happens

`np.lexsort` requires a sequence of 1D key arrays (or columns) that all have the same length. Typically, each key is a column describing the sorting order for a dataset: they must align in length.

### Fix

Ensure each key has the same number of elements. If your data is provided as columns, transpose or reshape it into a set of 1D arrays that match.

#### Wrong code

```python
import numpy as np
keys = (np.array([1,2,3]), np.array([1,2]))
np.lexsort(keys)  # ValueError: keys lengths differ
```

#### Fixed code

```python
import numpy as np
keys = (np.array([1,2,3]), np.array([1,2,3]))
print(np.lexsort(keys))  # returns sorted indices

# Or if data is 2D (rows = observations), split columns as keys
data = np.array([[1, 1], [2, 2], [3, 3]])
keys = data.T
print(np.lexsort(keys))
```
