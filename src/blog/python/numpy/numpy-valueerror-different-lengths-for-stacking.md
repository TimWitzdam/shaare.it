---
title: "ValueError: all the input arrays must have same shape (stacking)"
description: "Stacking arrays of different lengths/shapes fails."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: all the input arrays must have same shape

```bash
$ python - <<'PY'
import numpy as np
np.vstack([np.arange(3), np.arange(4)])
PY
Traceback (most recent call last):
  File "<stdin>", line 2, in <module>
ValueError: all the input arrays must have the same shape
```

### Why this happens

Functions like `vstack`, `hstack`, and `concatenate` require matching dimensions along the concatenation axis.

### Fix

Pad, trim, or reshape arrays to compatible shapes before stacking. Alternatively, use object dtype (not recommended) or handle with Python lists.

#### Wrong code

```python
import numpy as np
print(np.vstack([np.arange(3), np.arange(4)]))
```

#### Fixed code

```python
import numpy as np
a = np.arange(3)
b = np.arange(4)[:3]
print(np.vstack([a, b]))

# or pad b
b_padded = np.pad(b, (0,1), constant_values=0)
print(np.vstack([a, b_padded]))
```
