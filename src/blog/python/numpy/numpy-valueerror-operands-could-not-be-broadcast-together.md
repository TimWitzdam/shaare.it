---
title: "ValueError: operands could not be broadcast together"
description: "Broadcasting errors in NumPy and how to align shapes correctly."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: operands could not be broadcast together

```bash
$ python -c "import numpy as np; a=np.zeros((3,2)); b=np.zeros((2,)); a+b"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: operands could not be broadcast together with shapes (3,2) (2,)
```

### Why this happens

NumPy broadcasting rules require that dimensions either match or one of them is 1. If shapes are incompatible, element-wise operations cannot proceed.

### Fix

Reshape or expand dimensions, or make shapes compatible via broadcasting (e.g., using np.newaxis) or explicit replication.

#### Wrong code

```python
import numpy as np
a = np.zeros((3,2))
b = np.ones((2,))
print(a + b)
```

#### Fixed code

```python
import numpy as np
a = np.zeros((3,2))
b = np.ones((1,2))        # shape compatible
print(a + b)

# or
b = np.ones((2,))[np.newaxis, :]
print((a + b))
```
