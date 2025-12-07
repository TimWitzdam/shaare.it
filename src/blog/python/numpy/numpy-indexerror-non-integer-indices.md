---
title: "IndexError/TypeError: arrays used as indices must be of integer (or boolean) type"
description: "Indexing with float arrays or invalid dtypes raises this error."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## Arrays used as indices must be of integer (or boolean) type

```bash
$ python -c "import numpy as np; a=np.arange(5); idx=np.array([0.1,1.2]); a[idx]"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
IndexError: arrays used as indices must be of integer (or boolean) type
```

### Why this happens

NumPy expects integer or boolean arrays for indexing. Floating-point or other dtypes are invalid.

### Fix

Convert indices to integer type (if appropriate) or build a boolean mask.

#### Wrong code

```python
import numpy as np
a = np.arange(5)
idx = np.array([0.1, 2.0])
print(a[idx])
```

#### Fixed code

```python
import numpy as np
a = np.arange(5)
idx = np.array([0, 2], dtype=int)
print(a[idx])

# or boolean mask
mask = a % 2 == 0
print(a[mask])
```
