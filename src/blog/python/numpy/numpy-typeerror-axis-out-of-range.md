---
title: "IndexError: axis is out of bounds for array of dimension"
description: "Raised when an invalid axis is provided to a NumPy function."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## Axis out of range

```bash
$ python -c "import numpy as np; a=np.zeros((3,4)); np.sum(a, axis=2)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
IndexError: axis 2 is out of bounds for array of dimension 2
```

### Why this happens

The axis argument must be between 0 and ndim-1. Asking for an axis >= ndim raises an IndexError.

### Fix

Check the array's `ndim` or use `np.expand_dims` / `np.newaxis` to add dimensions before operating.

#### Wrong code

```python
import numpy as np
a = np.zeros((3,4))
np.sum(a, axis=2)
```

#### Fixed code

```python
import numpy as np
a = np.zeros((3,4))
print(a.sum(axis=1))
# or add a dimension
a3 = a[..., np.newaxis]
print(a3.sum(axis=2))
```
