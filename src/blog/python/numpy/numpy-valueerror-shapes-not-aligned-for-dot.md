---
title: "ValueError: shapes not aligned for dot"
description: "np.dot shape alignment errors and how to arrange dimensions correctly."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: shapes not aligned for dot

```bash
$ python -c "import numpy as np; a=np.zeros((3,)); b=np.zeros((3,2)); np.dot(a,b)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: shapes (3,) and (3,2) not aligned: 3 (dim 0) != 3 (dim 0)
```

### Why this happens

np.dot expects the inner dimensions to match depending on vector/matrix shapes; confusion between 1-D and 2-D arrays can cause mismatch.

### Fix

Use appropriate shapes (1-D vs 2-D) or use np.matmul/@ operator with proper broadcasting.

#### Wrong code

```python
import numpy as np
a = np.zeros((3,))
b = np.zeros((3,2))
print(np.dot(a,b))
```

#### Fixed code

```python
import numpy as np
a = np.zeros((1,3))
b = np.zeros((3,2))
print(np.dot(a,b))

# or
a = np.zeros((3,))
print(np.matmul(a, b))
```
