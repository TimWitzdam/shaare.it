---
title: "TypeError: array must be C-contiguous (non-contiguous array)"
description: "C-extensions and some NumPy operations require contiguous arrays. Non-contiguous arrays can cause TypeError."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: array must be C-contiguous (non-contiguous array)

```bash
$ python - <<'PY'
import numpy as np
import ctypes
# A transposed view is not C-contiguous
arr = np.arange(12).reshape((3,4)).T
print(arr.flags)  # shows C_CONTIGUOUS False
# Passing this array to a C extension that requires contiguous memory can fail:
# TypeError: array must be C-contiguous
PY
```

### Why this happens

A C extension or low-level routine may require the data buffer to be contiguous (row-major / C order). NumPy views created by operations like transpose often produce non-contiguous arrays (they're views with custom strides). Some interfaces will raise a `TypeError` if they are given a non-contiguous array instead of a contiguous one.

### Fix

- Convert the array to a contiguous layout with `np.ascontiguousarray(arr)`.
- Or call `arr.copy()`—this produces a C-contiguous copy.
- When interfacing with C libraries, consider using `arr.ctypes` after ensuring contiguity.

#### Wrong code

```python
import numpy as np
arr = np.arange(12).reshape((3, 4)).T
# C extension expecting contiguous memory may reject this view
def c_extension_receive(arr):
    # pseudo-error if arr is not C-contiguous
    if not arr.flags['C_CONTIGUOUS']:
        raise TypeError("array must be C-contiguous")

c_extension_receive(arr)
```

#### Fixed code

```python
import numpy as np
arr = np.arange(12).reshape((3, 4)).T
# Make a contiguous copy
contig = np.ascontiguousarray(arr)
print(contig.flags['C_CONTIGUOUS'])  # True

# pass contig to C extension
# c_extension_receive(contig)
```
