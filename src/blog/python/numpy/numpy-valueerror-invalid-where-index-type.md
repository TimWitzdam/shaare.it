---
title: "ValueError: x and y arguments to np.where must match condition shape or be broadcastable"
description: "Errors when using np.where(cond, x, y) where x/y do not align with cond."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: x and y arguments to np.where must match condition shape or be broadcastable

```bash
$ python - <<'PY'
import numpy as np
cond = np.array([True, False])
x = np.array([1, 2, 3])
y = np.array([0, 0])
np.where(cond, x, y)
PY
Traceback (most recent call last):
  File "<string>", line 5, in <module>
ValueError: operands could not be broadcast together with remapped shapes [original->remapped]: (3,) and (2,) .  Mismatch is between arg 0 and arg 1
```

### Why this happens

When calling `np.where(cond, x, y)`, `x` and `y` need to be arrays that can be broadcast to the same shape as `cond` (or to a shape that can broadcast to `cond`). If `x` and `y` have incompatible shapes, NumPy raises a broadcast-related ValueError.

### Fix

Make `x` and `y` arrays of shapes that broadcast to the same shape as `cond`. This usually means making `x` and `y` the same length as `cond` or reshaping/broadcasting appropriately.

#### Wrong code

```python
import numpy as np
cond = np.array([True, False])
x = np.array([1, 2, 3])
y = np.array([0, 0])
np.where(cond, x, y)  # ValueError due to shape mismatch
```

#### Fixed code

```python
import numpy as np
cond = np.array([True, False])
x = np.array([1, 2])
y = np.array([0, 0])
print(np.where(cond, x, y))  # [1 0]

# Or broadcast x and y manually
x = np.array([1])
y = np.array([0])
print(np.where(cond, x, y))  # [1 0]
```
