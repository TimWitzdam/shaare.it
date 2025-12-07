---
title: "TypeError: only size-1 arrays can be converted to Python scalars (alternate)"
description: "Alternative phrasing of scalar conversion errors and how to handle them."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: only size-1 arrays can be converted to Python scalars

```bash
$ python -c "import numpy as np; np.float64(np.array([1,2]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: only size-1 arrays can be converted to Python scalars
```

### Why this happens

A conversion to a Python scalar (float, int) is requested but the source is an array with multiple elements.

### Fix

Index into the array to get a single element, or reduce it with a summary operation.

#### Wrong code

```python
import numpy as np
arr = np.array([1,2])
val = float(arr)
```

#### Fixed code

```python
import numpy as np
arr = np.array([1,2])
val = float(arr[0])
# or
val = arr.mean().item()
```
