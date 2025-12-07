---
title: "DeprecationWarning: numpy.matrix is deprecated"
description: "Migrating away from the deprecated numpy.matrix class to ndarray."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## DeprecationWarning: numpy.matrix is deprecated

```bash
$ python -c "import numpy as np; np.matrix([[1,2],[3,4]])"
/tmp/ipykernel_12345/....py:1: DeprecationWarning: `np.matrix` is deprecated; use regular ndarrays instead
  np.matrix([[1,2],[3,4]])
```

### Why this happens

NumPy is phasing out `np.matrix` because its behavior differs from ndarrays (e.g., `*` does matrix multiplication). Newer code should use `ndarray` with `@` or `np.matmul` for matrix multiplication.

### Fix

Use `np.array` and the `@` operator or `np.matmul`. Update code to avoid `np.matrix` creation and conversion quirks.

#### Wrong code

```python
import numpy as np
M = np.matrix([[1,2],[3,4]])
print(M * M)
```

#### Fixed code

```python
import numpy as np
M = np.array([[1,2],[3,4]])
print(M @ M)
# or np.matmul(M, M)
```
