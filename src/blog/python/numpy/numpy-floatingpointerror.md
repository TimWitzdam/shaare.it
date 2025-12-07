---
title: "FloatingPointError: encountered floating-point exception"
description: "Raised when NumPy is set to raise on floating-point errors like divide-by-zero or overflow."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## FloatingPointError: encountered floating-point exception

```bash
$ python -c "import numpy as np; np.seterr(all='raise'); np.array([1.0]) / 0"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
FloatingPointError: divide by zero encountered in true_divide
```

### Why this happens

NumPy can be configured to raise exceptions on floating-point issues (divide-by-zero, invalid operations, overflow). When such an operation occurs, FloatingPointError is raised.

### Fix

Handle or avoid illegal operations, or set error handling back to warnings using `np.seterr`. Use masked arrays or check denominators before dividing.

#### Wrong code

```python
import numpy as np
np.seterr(all='raise')
print(np.array([1.0]) / 0)
```

#### Fixed code

```python
import numpy as np
np.seterr(all='warn')
den = np.array([0.0])
num = np.array([1.0])
safe = np.where(den == 0, np.nan, num/den)
print(safe)
```
