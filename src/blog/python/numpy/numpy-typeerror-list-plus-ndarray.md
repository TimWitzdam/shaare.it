---
title: 'TypeError: can only concatenate list (not "numpy.ndarray") to list'
description: "Mixing Python lists and NumPy arrays using + can raise TypeError because the operator means different things for lists and arrays."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: can only concatenate list (not "numpy.ndarray") to list

```bash
$ python -c "import numpy as np; print([1,2] + np.array([3,4]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: can only concatenate list (not "numpy.ndarray") to list
```

### Why this happens

In Python, the `+` operator for lists performs concatenation of Python lists. It does not automatically convert or coerce NumPy `ndarray` objects into lists. When you pass an ndarray to list concatenation, Python throws a TypeError because it expects another list.

### Fix

Convert both operands to NumPy arrays and use vectorized arithmetic, convert the array to a list first, or use `np.concatenate`/`np.hstack`/`np.vstack` depending on the shape and intent.

#### Wrong code

```python
import numpy as np
result = [1, 2] + np.array([3, 4])  # TypeError
```

#### Fixed code

```python
import numpy as np
# Option 1 - vectorized adding with arrays
result = np.array([1, 2]) + np.array([3, 4])
print(result)  # [4 6]

# Option 2 - concatenate as sequences: convert array to list
result = [1, 2] + list(np.array([3, 4]))
print(result)  # [1, 2, 3, 4]

# Option 3 - use NumPy concatenation
result = np.concatenate([np.array([1, 2]), np.array([3, 4])])
print(result)  # [1 2 3 4]
```
