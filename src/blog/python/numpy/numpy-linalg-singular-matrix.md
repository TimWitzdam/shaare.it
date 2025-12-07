---
title: "LinAlgError: Singular matrix"
description: "Raised when solving linear systems or inverting matrices that are singular."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## LinAlgError: Singular matrix

```bash
$ python -c "import numpy as np; from numpy.linalg import inv; a = np.array([[1,2],[2,4]]); inv(a)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
numpy.linalg.LinAlgError: Singular matrix
```

### Why this happens

The matrix is singular (determinant zero) and not invertible; linear solvers and inverse operations fail.

### Fix

Check matrix rank, use pseudo-inverse `np.linalg.pinv`, regularize, or reformulate the problem.

#### Wrong code

```python
import numpy as np
from numpy.linalg import inv
a = np.array([[1,2],[2,4]])
inv(a)
```

#### Fixed code

```python
import numpy as np
from numpy.linalg import pinv
a = np.array([[1,2],[2,4]])
print(pinv(a))

# or regularize
a_reg = a + np.eye(2) * 1e-8
print(np.linalg.inv(a_reg))
```
