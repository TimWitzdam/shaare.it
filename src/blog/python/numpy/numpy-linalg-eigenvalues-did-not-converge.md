---
title: "LinAlgError: eigenvalues did not converge"
description: "Why eigenvalue computations sometimes fail to converge and mitigation strategies."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## eigenvalues did not converge

```bash
$ python - <<'PY'
import numpy as np
A = np.array([[1e308, 1e308],[1e308, 1e308]])
np.linalg.eig(A)
PY
Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
LinAlgError: eigenvalues did not converge
```

### Why this happens

Ill-conditioned matrices, extreme values, or numerical instability can cause iterative eigensolvers to fail to converge.

### Fix

Precondition or scale the matrix, use higher precision (if available), or try alternative algorithms/packages (scipy.sparse.linalg or ARPACK wrappers). Regularize the matrix if appropriate.

#### Wrong code

```python
import numpy as np
A = np.array([[1e308, 1e308],[1e308, 1e308]])
np.linalg.eig(A)
```

#### Fixed code

```python
import numpy as np
from numpy.linalg import eig
# scale down to avoid overflow
A = np.array([[1e3, 1e3],[1e3, 1e3]])
vals, vecs = eig(A)

# or use pseudo-spectra libraries for very ill-conditioned problems
```
