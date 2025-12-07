---
title: "ValueError: too many indices for array"
description: "Indexing an array with more indices than its number of dimensions."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: too many indices for array

```bash
$ python -c "import numpy as np; a = np.array([1,2,3]); a[0,0]"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
IndexError: too many indices for array: array is 1-dimensional, but 2 were indexed
```

### Why this happens

You're indexing a lower-dimensional array as if it had more dimensions. This frequently occurs after unintended reshapes or when expecting nested arrays.

### Fix

Inspect the array's shape and use the correct number of indices. Reshape to higher dimensions if necessary.

#### Wrong code

```python
import numpy as np
a = np.array([1,2,3])
print(a[0,0])
```

#### Fixed code

```python
import numpy as np
a = np.array([1,2,3])
print(a[0])
# or
arr2 = a.reshape(1,3)
print(arr2[0,0])
```
