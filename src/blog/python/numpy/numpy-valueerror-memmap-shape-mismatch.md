---
title: "ValueError: memmap shape mismatch"
description: "Errors when using numpy.memmap with a shape that doesn't match the file size."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: memmap shape mismatch

```bash
$ python - <<'PY'
import numpy as np
# Create an empty file and try to create a memmap for N elements
open('empty.dat', 'wb').close()
np.memmap('empty.dat', dtype='float32', mode='r', shape=(10,))
PY
Traceback (most recent call last):
  File "<string>", line 4, in <module>
ValueError: file size and array size do not match
```

### Why this happens

`np.memmap` creates a memory-mapped view of a binary file. If you pass a `shape` argument, NumPy expects the file's size to match `shape * dtype.itemsize`. If it doesn't, `np.memmap` raises a ValueError.

### Fix

- Use `mode='w+'` to create a file with the expected size, or create a file of the correct size before mapping.
- Alternatively, do not provide an explicit shape; NumPy will infer the size from the file in some cases.

#### Wrong code

```python
import numpy as np
open('empty.dat', 'wb').close()
# file is empty, shape expects 10 elements -> ValueError
m = np.memmap('empty.dat', dtype='float32', mode='r', shape=(10,))
```

#### Fixed code

```python
import numpy as np
# create a file large enough for 10 float32 values
with open('data.dat', 'wb') as f:
    f.write(b'\x00' * 10 * 4)  # 4 bytes per float32
m = np.memmap('data.dat', dtype='float32', mode='r', shape=(10,))
print(len(m))  # 10

# Or create the memmap directly with write mode
m2 = np.memmap('new.dat', dtype='float32', mode='w+', shape=(10,))
print(m2.shape)  # (10,)
```
