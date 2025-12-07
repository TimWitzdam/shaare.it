---
title: "LinAlgError: Last 2 dimensions of the array must be square"
description: "Matrix operations requiring square matrices (inverse, solve, etc.)."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## Last 2 dimensions must be square

```bash
$ python - <<'PY'
import numpy as np
A = np.array([[1,2,3],[4,5,6]])
np.linalg.inv(A)
PY
Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
LinAlgError: Last 2 dimensions of the array must be square
```

### Why this happens

Linear algebra routines like `inv`, `eig`, and `solve` require square matrices (n x n). Passing a non-square matrix triggers this error.

### Fix

Ensure matrices are square. For rectangular problems use pseudo-inverse (`np.linalg.pinv`) or least-squares solvers (`np.linalg.lstsq`).

#### Wrong code

```python
import numpy as np
A = np.array([[1,2,3],[4,5,6]])
np.linalg.inv(A)
```

#### Fixed code

```python
import numpy as np
A = np.array([[1,2],[3,4]])
invA = np.linalg.inv(A)

# or use pseudo-inverse for rectangular matrices
B = np.array([[1,2,3],[4,5,6]])
pinvB = np.linalg.pinv(B)
```
