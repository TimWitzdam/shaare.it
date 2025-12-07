---
title: "AxisError: axis out of bounds for array of dimension N"
description: "Specifying an invalid axis index for array operations."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## axis out of bounds for array of dimension

```bash
$ python - <<'PY'
import numpy as np
arr = np.zeros((3,))
np.sum(arr, axis=1)
PY
Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
AxisError: axis 1 is out of bounds for array of dimension 1
```

### Why this happens

Arrays have dimensions indexed from 0 to ndim-1. Asking for an axis outside this range triggers AxisError.

### Fix

Use the correct axis (or omit it for flat reductions), or reshape the array to include the expected dimensions.

#### Wrong code

```python
import numpy as np
arr = np.zeros((3,))
np.sum(arr, axis=1)
```

#### Fixed code

```python
import numpy as np
arr = np.zeros((3,))
np.sum(arr, axis=0)

# or make it 2D
arr2 = arr[np.newaxis, :]
np.sum(arr2, axis=1)
```
