---
title: "ValueError: boolean index did not match indexed array shape"
description: "Boolean mask length or shape must match the array being indexed."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## boolean index did not match indexed array shape

```bash
$ python - <<'PY'
import numpy as np
arr = np.arange(6).reshape(2,3)
mask = np.array([True, False, True])
arr[mask]
PY
Traceback (most recent call last):
  File "<stdin>", line 5, in <module>
ValueError: boolean index did not match indexed array along dimension 0; expected 2 but got 3
```

### Why this happens

When using boolean masks the mask must match the shape of the axis you index. A 2x3 array requires a mask of length 2 for axis 0 or shape (2,3) for elementwise indexing.

### Fix

Align mask shapes with the array: reshape or broadcast the mask correctly, or index the intended axis explicitly.

#### Wrong code

```python
import numpy as np
arr = np.arange(6).reshape(2,3)
mask = np.array([True, False, True])
arr[mask]
```

#### Fixed code

```python
import numpy as np
arr = np.arange(6).reshape(2,3)
# mask along rows
row_mask = np.array([True, False])
arr[row_mask]

# or elementwise mask
elem_mask = np.array([[True, False, True], [False, False, False]])
arr[elem_mask]
```
