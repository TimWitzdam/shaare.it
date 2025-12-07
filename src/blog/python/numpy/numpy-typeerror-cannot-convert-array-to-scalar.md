---
title: "TypeError: cannot convert the argument to a scalar"
description: "Raised when a function expects a scalar but receives an array."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: cannot convert the argument to a scalar

```bash
$ python -c "import numpy as np; np.int_(np.array([1,2]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: only size-1 arrays can be converted to Python scalars
```

### Why this happens

You're trying to convert an array with more than one element into a scalar; only size-1 arrays can be converted.

### Fix

Index into the array or reduce it to a single value before conversion, or ensure the input is a scalar.

#### Wrong code

```python
import numpy as np
print(np.int_(np.array([1,2])))
```

#### Fixed code

```python
import numpy as np
arr = np.array([1,2])
print(np.int_(arr[0]))

# or reduce
print(int(arr.sum()))
```
