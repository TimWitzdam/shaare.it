---
title: "TypeError: slice indices must be integers or None or have an __index__ method"
description: "Using floats or numpy scalars as slice indices causes TypeError."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## slice indices must be integers

```bash
$ python - <<'PY'
import numpy as np
arr = np.arange(10)
start = 1.0
arr[start:5]
PY
Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
TypeError: slice indices must be integers or None or have an __index__ method
```

### Why this happens

Slice indices must be integers; floats (including NumPy float scalars) don't implement the `__index__` protocol.

### Fix

Convert to int explicitly or use integer-typed NumPy scalars.

#### Wrong code

```python
import numpy as np
arr = np.arange(10)
start = 1.0
arr[start:5]
```

#### Fixed code

```python
import numpy as np
arr = np.arange(10)
start = int(1.0)
arr[start:5]

# or use np.int64(1).item() to get Python int
```
