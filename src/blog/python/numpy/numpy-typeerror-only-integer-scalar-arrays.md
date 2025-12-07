---
title: "TypeError: only integer scalar arrays can be converted to a scalar index"
description: "When attempting to use arrays where an integer index is required."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: only integer scalar arrays can be converted to a scalar index

```bash
$ python -c "import numpy as np; a=np.arange(10); idx=np.array([1]); print(a[idx])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: only integer scalar arrays can be converted to a scalar index
```

### Why this happens

This occurs when you pass an array (even of length 1) to an indexing position that expects an integer scalar. NumPy distinguishes between integer arrays (used for advanced indexing) and single-integer scalar indices.

### Fix

Use idx.item() or int(idx) to convert a length-1 array to a scalar, or use advanced indexing properly by passing an integer array in a context that supports it.

#### Wrong code

```python
import numpy as np
a = np.arange(10)
idx = np.array([3])
print(a[idx])  # may raise depending on context
```

#### Fixed code

```python
import numpy as np
a = np.arange(10)
idx = np.array([3])
print(a[int(idx)])
# or use advanced indexing explicitly
print(a[idx.reshape(-1)])
```
