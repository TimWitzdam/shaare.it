---
title: "IndexError / ValueError: kth index out of range in np.argpartition"
description: "Selecting a kth index that's outside the size of the array raises an IndexError or ValueError in argpartition."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## IndexError / ValueError: kth index out of range in np.argpartition

```bash
$ python - <<'PY'
import numpy as np
arr = np.array([3,1,2])
# ask for the 5th order statistic on a 3-element array
np.argpartition(arr, 5)
PY
Traceback (most recent call last):
  File "<string>", line 4, in <module>
IndexError: index 5 is out of bounds for axis 0 with size 3
```

### Why this happens

`np.argpartition` requires `k` to be a valid index in the range `0 <= k < arr.size`. If you pass a `k` outside of that range (or a negative value that doesn’t map correctly), NumPy will raise an IndexError.

### Fix

Choose a valid `k` value, or clamp `k` to a valid range. Use `min(k, arr.size-1)` or check the array size before calling.

#### Wrong code

```python
import numpy as np
arr = np.array([3, 1, 2])
np.argpartition(arr, 5)  # IndexError
```

#### Fixed code

```python
import numpy as np
arr = np.array([3, 1, 2])
k = 2
print(np.argpartition(arr, k))  # valid: returns indices that would partition around position k

# clamp to the array size if k might be large
k = min(5, arr.size - 1)
print(np.argpartition(arr, k))
```
