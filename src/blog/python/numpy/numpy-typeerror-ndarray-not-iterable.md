---
title: "TypeError: 'numpy.ndarray' object is not iterable"
description: "Errors from iterating over or unpacking arrays in contexts that require scalars or different shapes."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: 'numpy.ndarray' object is not iterable

```bash
$ python -c "import numpy as np; a=np.array(1); [x for x in a]"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'numpy.ndarray' object is not iterable
```

### Why this happens

This usually occurs when you try to iterate over a zero-dimensional array (scalar array) or when a function expects an iterable of scalars but receives an ndarray with an unexpected shape.

### Fix

Convert 0-d arrays to Python scalars with .item(), ensure arrays are shaped correctly, or use .tolist() to get a native list.

#### Wrong code

```python
import numpy as np
a = np.array(1)  # 0-d array
for x in a:
    print(x)
```

#### Fixed code

```python
import numpy as np
a = np.array(1)
# use scalar
x = a.item()
print(x)

# or ensure iterable
b = np.array([1])
for x in b:
    print(x)

# or convert to list
print(a.tolist())
```
