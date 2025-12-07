---
title: "OverflowError: Result too large"
description: "Numeric overflow when results exceed the max representable value."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## OverflowError: Result too large

```bash
$ python - <<'PY'
import numpy as np
np.seterr(all='raise')
np.exp(1000)
PY
Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
OverflowError: (34, 'Result too large')
```

### Why this happens

An operation computes a value outside the dtype's range (e.g., exp on large inputs for float64).

### Fix

Work in log-space, clamp inputs, check ranges, or use higher-precision types where available.

#### Wrong code

```python
import numpy as np
np.seterr(all='raise')
print(np.exp(1000))
```

#### Fixed code

```python
import numpy as np
val = 1000
print(np.inf if val > 709 else np.exp(val))
```
