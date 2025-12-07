---
title: "RuntimeError: reduction axes out of range"
description: "Errors raised when reduction functions receive invalid axis indices."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## RuntimeError / AxisError: reduction axes out of range

```bash
$ python -c "import numpy as np; a=np.zeros((2,3)); np.sum(a, axis=2)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AxisError: axis 2 is out of bounds for array of dimension 2
```

### Why this happens

You passed an axis index that doesn't exist for the array shape. NumPy arrays are 0-indexed and axes range from -ndim to ndim-1.

### Fix

Use a valid axis value, check array.ndim, or reshape the array to include the intended axis.

#### Wrong code

```python
import numpy as np
a = np.zeros((2,3))
np.sum(a, axis=2)
```

#### Fixed code

```python
import numpy as np
a = np.zeros((2,3))
# valid axes: 0 or 1
print(np.sum(a, axis=1))

# or reshape if you intended a different shape
b = a.reshape(2,3,1)
print(np.sum(b, axis=2))
```
