---
title: "TypeError: can't multiply sequence by numpy.float64"
description: "Multiplying Python lists by NumPy scalar values can raise TypeError — why and how to fix it."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## can't multiply sequence by numpy.float64

```bash
$ python - <<'PY'
import numpy as np
lst = [1,2]
f = np.float64(2.0)
lst * f
PY
Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
TypeError: can't multiply sequence by non-int of type 'numpy.float64'
```

### Why this happens

Python sequence repetition expects an integer multiplier. NumPy scalar types are not always accepted as integers by built-in sequence operations.

### Fix

Convert the scalar to a Python int, convert the list to a NumPy array, or use a list comprehension to scale elements.

#### Wrong code

```python
import numpy as np
lst = [1,2]
f = np.float64(2.0)
lst * f
```

#### Fixed code

```python
import numpy as np
lst = [1,2]
f = int(np.float64(2.0))
lst * f

# or vectorize
arr = np.array(lst)
arr * 2.0

# or list comprehension
[x * 2.0 for x in lst]
```
