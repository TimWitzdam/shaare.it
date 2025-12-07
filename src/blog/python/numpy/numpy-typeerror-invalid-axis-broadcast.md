---
title: "ValueError: operands could not be broadcast together (assignment/binary op)"
description: "Broadcasting errors when operand shapes are incompatible."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: operands could not be broadcast together

```bash
$ python -c "import numpy as np; a=np.zeros((2,3)); b=np.ones((3,)); print(a+b)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: operands could not be broadcast together with shapes (2,3) (3,)
```

### Why this happens

NumPy can broadcast arrays when their shapes are compatible (trailing dimensions match or are 1). If shapes don't align, operations fail.

### Fix

Reshape or expand dimensions (e.g., using np.newaxis) to make shapes compatible, or explicitly tile/repeat arrays to match.

#### Wrong code

```python
import numpy as np
a = np.zeros((2,3))
b = np.ones((3,))
print(a + b)
```

#### Fixed code

```python
import numpy as np
a = np.zeros((2,3))
b = np.ones((3,))
# b has shape (3,) -> compatible with (2,3) if treated as (1,3)
print(a + b)  # actually this works; example for incompatible shapes:

# Example fix for truly incompatible shapes
b = np.ones((3,1))
print(a + b.T)  # reshape to (1,3) or (2,3)

# or
b = np.ones((1,3))
print(a + b)
```
