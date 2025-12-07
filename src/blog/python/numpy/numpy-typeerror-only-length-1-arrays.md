---
title: "TypeError: only length-1 arrays can be converted to Python scalars"
description: "Raised when a multi-element array is used where a single scalar is required."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: only length-1 arrays can be converted to Python scalars

```bash
$ python -c "import numpy as np; float(np.array([1,2]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: only size-1 arrays can be converted to Python scalars
```

### Why this happens

A function or constructor expects a single scalar value but receives an array with more than one element.

### Fix

Pick a single element from the array or reduce it to a scalar using .item(), .sum(), etc.

#### Wrong code

```python
import numpy as np
arr = np.array([3,4])
val = float(arr)
```

#### Fixed code

```python
import numpy as np
arr = np.array([3,4])
val = float(arr[0])
# or
val = arr.item(0)
```
