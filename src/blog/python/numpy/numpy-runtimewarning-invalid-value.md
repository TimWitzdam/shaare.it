---
title: "RuntimeWarning: invalid value encountered in <ufunc>"
description: "RuntimeWarning when operations produce NaN or invalid numeric results."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## RuntimeWarning: invalid value encountered

```bash
$ python -c "import numpy as np; np.log(np.array([-1.0]))"
/tmp/...: RuntimeWarning: invalid value encountered in log
  np.log(np.array([-1.0]))
```

### Why this happens

The operation produced an undefined result (NaN or complex), but NumPy continues and emits a RuntimeWarning instead of raising.

### Fix

Validate inputs or use complex dtypes if complex results are expected. Handle NaNs after the operation.

#### Wrong code

```python
import numpy as np
print(np.log(np.array([-1.0, 2.0])))
```

#### Fixed code

```python
import numpy as np
arr = np.array([-1.0, 2.0])
res = np.empty_like(arr)
mask = arr > 0
res[mask] = np.log(arr[mask])
res[~mask] = np.nan
print(res)

# or use complex dtype
print(np.log(arr.astype(np.complex128)))
```
