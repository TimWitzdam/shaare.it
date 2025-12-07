---
title: "TypeError: 'float' object cannot be interpreted as an integer"
description: "Occurs when a float is passed to APIs that expect an integer (shape, indexing, range)."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: 'float' object cannot be interpreted as an integer

```bash
$ python -c "import numpy as np; np.zeros(5.0)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'float' object cannot be interpreted as an integer
```

### Why this happens

NumPy expects integer arguments for sizes, shapes, or indices. Passing a float (even one that looks integral) raises this error.

### Fix

Convert floats to ints explicitly using int() or ensure variables are integers. Validate user input before passing to NumPy functions.

#### Wrong code

```python
import numpy as np
n = 5.0
arr = np.zeros(n)
```

#### Fixed code

```python
import numpy as np
n = 5
arr = np.zeros(int(n))

# or validate
if not float(n).is_integer():
    raise ValueError('size must be integer')
arr = np.zeros(int(n))
```
