---
title: "RuntimeWarning: overflow encountered in exp"
description: "Numerical overflows in ufuncs like exp, leading to inf results."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## overflow encountered in exp

```bash
$ python - <<'PY'
import numpy as np
np.exp(1000)
PY
/home/user/.local/lib/python3.10/site-packages/numpy/core/_methods.py:...: RuntimeWarning: overflow encountered in exp
  return umr_minimum(a, axis, None, keepdims)
# result will be inf
```

### Why this happens

Exponential grows very quickly; inputs beyond float range produce infinities. NumPy emits a RuntimeWarning rather than crashing.

### Fix

Clip or scale inputs, use log-space computations when possible (log-sum-exp trick), or use higher precision libraries.

#### Wrong code

```python
import numpy as np
np.exp(1000)
```

#### Fixed code

```python
import numpy as np
import math
# use clipping
np.exp(np.clip(1000, None, 700))

# or compute in log-space
def logsumexp(a):
    m = np.max(a)
    return m + np.log(np.sum(np.exp(a - m)))
```
