---
title: "ValueError: cannot load pickled data when allow_pickle is False"
description: "Loading .npy/.npz files containing Python objects without allow_pickle set."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: cannot load pickled data

```bash
$ python -c "import numpy as np; np.load('data.npy')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
  File "/usr/lib/python3/dist-packages/numpy/lib/npyio.py", line 423, in load
    raise ValueError("Object arrays cannot be loaded when allow_pickle=False")
ValueError: Object arrays cannot be loaded when allow_pickle=False
```

### Why this happens

The file being loaded contains Python objects serialized with pickle (object dtype). For security, NumPy disables pickle-based loading by default. Loading these requires explicitly opting in.

### Fix

If the file comes from a trusted source, call np.load with allow_pickle=True. Otherwise, recreate the file without pickled objects (use plain numeric arrays or safer serialization formats like JSON, HDF5).

#### Wrong code

```python
import numpy as np
arr = np.load('data_with_objects.npy')
```

#### Fixed code

```python
import numpy as np
# Only use this if you trust the file source
arr = np.load('data_with_objects.npy', allow_pickle=True)

# Safer approach: serialize data without pickling (example using np.savez)
# Save: np.savez('safe.npz', arr1=arr_numeric)
# Load: data = np.load('safe.npz')
```
