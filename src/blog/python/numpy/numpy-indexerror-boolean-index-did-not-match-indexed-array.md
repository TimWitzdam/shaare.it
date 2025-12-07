---
title: "IndexError: boolean index did not match indexed array"
description: "Boolean indexing length mismatches and how to build correct masks."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## IndexError: boolean index did not match indexed array

```bash
$ python -c "import numpy as np; a=np.arange(6); mask=np.array([True, False]); a[mask]"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
IndexError: boolean index did not match indexed array along dimension 0; dimension is 6 but corresponding boolean dimension is 2
```

### Why this happens

Boolean masks must have the same shape as the dimension they're indexing. A mismatched mask length leads to this IndexError.

### Fix

Make the mask the same shape as the array dimension or use broadcasting appropriately.

#### Wrong code

```python
import numpy as np
a = np.arange(6)
mask = np.array([True, False])
print(a[mask])
```

#### Fixed code

```python
import numpy as np
a = np.arange(6)
mask = np.array([True, False, True, False, True, False])
print(a[mask])

# or create mask programmatically
print(a[a % 2 == 0])
```
