---
title: "LinAlgError: SVD did not converge"
description: "SVD convergence issues in NumPy's linear algebra routines and remedies."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## LinAlgError: SVD did not converge

```bash
$ python -c "import numpy as np; import numpy.linalg as la; a=np.random.rand(1000,1000); la.svd(a)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
numpy.linalg.LinAlgError: SVD did not converge
```

### Why this happens

SVD algorithms can fail to converge on ill-conditioned or extremely large matrices, or when numerical stability limits are reached.

### Fix

Precondition the matrix, reduce its size (truncate or use randomized SVD from sklearn or scipy), or try using more stable algorithms (e.g., use scipy.linalg.svd with different options).

#### Wrong code

```python
import numpy as np
import numpy.linalg as la
a = np.random.rand(1000,1000)
u,s,v = la.svd(a)
```

#### Fixed code (use smaller/regularized example)

```python
import numpy as np
import numpy.linalg as la
from scipy.sparse.linalg import svds

# use smaller matrix or randomized SVD
a = np.random.rand(200,200)
u,s,v = la.svd(a)

# or use svds for large sparse-like matrices
# u,s,v = svds(a, k=10)
```
