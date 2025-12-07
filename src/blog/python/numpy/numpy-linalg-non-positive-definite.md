---
title: "LinAlgError: Matrix is not positive definite"
description: "Linear algebra routines fail when input matrix is not symmetric positive-definite."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## LinAlgError: Matrix is not positive definite

```bash
$ python -c "import numpy as np; from numpy.linalg import cholesky; a=np.array([[1,2],[2,1]]); cholesky(a)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
numpy.linalg.LinAlgError: Matrix is not positive definite
```

### Why this happens

Cholesky decomposition requires a symmetric positive-definite matrix. If the matrix fails that test, the routine raises LinAlgError.

### Fix

Regularize the matrix by adding a small value to the diagonal, ensure symmetry, or use more robust decompositions (e.g., SVD).

#### Wrong code

```python
import numpy as np
from numpy.linalg import cholesky
a = np.array([[1,2],[2,1]])
cholesky(a)
```

#### Fixed code

```python
import numpy as np
from numpy.linalg import cholesky
a = np.array([[1,2],[2,1]])
a_reg = a + np.eye(a.shape[0]) * 1e-6
cholesky(a_reg)
```
