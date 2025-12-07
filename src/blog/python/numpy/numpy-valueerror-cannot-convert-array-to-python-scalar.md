---
title: "ValueError: cannot convert array to Python scalar"
description: "When passing multi-element arrays where a scalar is expected."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: cannot convert array to Python scalar

```bash
$ python -c "import numpy as np; np.int64(np.array([1,2]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: cannot convert array to Python scalar
```

### Why this happens

You attempted to convert or pass a multi-element array into a context that requires a single scalar value, e.g., functions that expect a single-number argument or dtype conversion.

### Fix

Select a single element (e.g., arr[0]) or reduce the array to a scalar (e.g., arr.sum(), arr.item()). Ensure shapes match expected inputs.

#### Wrong code

```python
import numpy as np
arr = np.array([1,2])
val = int(arr)
```

#### Fixed code

```python
import numpy as np
arr = np.array([1,2])
val = int(arr[0])
# or
val = arr.item(0)
```
