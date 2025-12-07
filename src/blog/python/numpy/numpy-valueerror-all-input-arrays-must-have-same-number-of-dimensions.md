---
title: "ValueError: all input arrays must have the same number of dimensions"
description: "Dimensionality mismatches when stacking or concatenating arrays."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## all input arrays must have the same number of dimensions

```bash
$ python - <<'PY'
import numpy as np
a = np.array([1,2,3])
b = np.array([[1,2,3]])
np.concatenate([a, b])
PY
Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
ValueError: all input arrays must have the same number of dimensions
```

### Why this happens

Functions like `concatenate`, `stack`, and `hstack` expect inputs to have identical dimensionality. Mixing 1D and 2D arrays leads to this error.

### Fix

Reshape or use `np.atleast_2d`, `np.ravel`, or adjust axes so all inputs match in ndim.

#### Wrong code

```python
import numpy as np
a = np.array([1,2,3])
b = np.array([[4,5,6]])
np.concatenate([a, b])
```

#### Fixed code

```python
import numpy as np
a = np.array([1,2,3])
b = np.array([[4,5,6]])
# make both 2D
combined = np.concatenate([a[np.newaxis, :], b])

# or flatten both
combined_flat = np.concatenate([a, b.ravel()])
```
