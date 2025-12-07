---
title: "ValueError: shapes not aligned"
description: "Matrix multiplication / dot product shape alignment errors in NumPy."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: shapes not aligned

```bash
$ python -c "import numpy as np; a=np.zeros((2,3)); b=np.zeros((4,2)); a.dot(b)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: shapes (2,3) and (4,2) not aligned: 3 (dim 1) != 4 (dim 0)
```

### Why this happens

Matrix multiplication requires the inner dimensions to match: (m x n) dot (n x p) -> (m x p). If they don't match, NumPy raises this ValueError.

### Fix

Transpose one operand or reshape arrays so inner dimensions agree.

#### Wrong code

```python
import numpy as np
a = np.zeros((2,3))
b = np.zeros((4,2))
print(a.dot(b))
```

#### Fixed code

```python
import numpy as np
a = np.zeros((2,3))
b = np.zeros((3,4))
print(a.dot(b))

# or transpose
print(a.dot(b.T))
```
