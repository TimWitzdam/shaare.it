---
title: "MemoryError: Unable to allocate array"
description: "Happens when NumPy cannot allocate enough memory for a large array."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## MemoryError: Unable to allocate array

```bash
$ python -c "import numpy as np; a = np.zeros((10**8, 10**2))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
MemoryError
```

### Why this happens

The requested array size exceeds available memory (RAM + swap). Large shapes or unintended broadcasting can create enormous arrays.

### Fix

Reduce array size, use memory-mapped arrays with `np.memmap`, use smaller dtypes (e.g., float32), or process data in chunks.

#### Wrong code

```python
import numpy as np
# unintentionally huge allocation
a = np.ones((10**8, 100))
```

#### Fixed code

```python
import numpy as np
# reduce size or use float32
a = np.ones((10**6, 100), dtype=np.float32)

# or memory-map a file to avoid loading all into RAM
fp = np.memmap('data.dat', dtype='float32', mode='w+', shape=(10**8,))
```
