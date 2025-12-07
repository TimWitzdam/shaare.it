---
title: "IndexError: index out of bounds"
description: "Indexing past array bounds in NumPy and how to correct indices."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## IndexError: index out of bounds

```bash
$ python -c "import numpy as np; a=np.zeros(3); print(a[5])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
IndexError: index 5 is out of bounds for axis 0 with size 3
```

### Why this happens

You tried to access an index that does not exist for the given axis. NumPy arrays have fixed sizes per dimension.

### Fix

Check shapes and index ranges. Use valid indices or safely guard access (e.g., bounds checks) or use slicing.

#### Wrong code

```python
import numpy as np
a = np.zeros(3)
print(a[5])
```

#### Fixed code

```python
import numpy as np
a = np.zeros(3)
idx = 2
if 0 <= idx < a.shape[0]:
    print(a[idx])
else:
    print('index out of range')
```
