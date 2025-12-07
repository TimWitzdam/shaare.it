---
title: "ValueError: all input arrays must have the same shape"
description: "Concatenation or stacking errors when arrays have different shapes and how to align them."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: all input arrays must have the same shape

```bash
$ python -c "import numpy as np; a=np.zeros((2,2)); b=np.zeros((3,2)); np.concatenate([a,b])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: all the input arrays must have same shape
```

### Why this happens

Functions like np.stack require all inputs to have identical shapes along the concatenation axes.

### Fix

Reshape, pad, or trim arrays to matching shapes or use concatenation along an axis that matches shapes.

#### Wrong code

```python
import numpy as np
a = np.zeros((2,2))
b = np.zeros((3,2))
np.stack([a,b])
```

#### Fixed code

```python
import numpy as np
a = np.zeros((2,2))
b = np.zeros((2,2))
np.stack([a,b])

# or concatenate along axis=0 if shapes match
np.concatenate([a,b[:2,:]], axis=0)
```
