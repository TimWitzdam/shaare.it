---
title: "TypeError: only size-1 arrays can be converted to Python scalars"
description: "Passing arrays where a scalar is expected, e.g., to math functions or Python builtins."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## only size-1 arrays can be converted to Python scalars

```bash
$ python - <<'PY'
import numpy as np
import math
arr = np.array([1.0, 2.0])
math.exp(arr)
PY
Traceback (most recent call last):
  File "<stdin>", line 5, in <module>
TypeError: only size-1 arrays can be converted to Python scalars
```

### Why this happens

Python scalar functions expect single numeric values. Passing a NumPy array instead triggers this error. Use NumPy's vectorized ufuncs instead.

### Fix

Use `np.exp`, iterate elementwise, or pass a scalar value.

#### Wrong code

```python
import numpy as np
import math
arr = np.array([1.0, 2.0])
math.exp(arr)
```

#### Fixed code

```python
import numpy as np
arr = np.array([1.0, 2.0])
np.exp(arr)

# or apply math.exp elementwise
[math.exp(float(x)) for x in arr]
```
