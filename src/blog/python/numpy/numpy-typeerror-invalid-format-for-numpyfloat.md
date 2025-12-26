---
title: "TypeError: Unknown format code 'd' for object of type 'numpy.float64'"
description: "Using integer-only format codes on numpy float scalars leads to TypeError (invalid format)."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: Unknown format code 'd' for object of type 'numpy.float64'

```bash
$ python - <<'PY'
import numpy as np
print("{:d}".format(np.float64(3.14)))
PY
Traceback (most recent call last):
  File "<string>", line 3, in <module>
TypeError: Unknown format code 'd' for object of type 'numpy.float64'
```

### Why this happens

Python's format specifiers (`d`, `f`, `s`, etc.) apply to specific types. The `d` specifier is for integers; using it with a float (including NumPy's `numpy.float64`) raises a TypeError. NumPy float scalars won't implicitly cast to Python int for integer formats.

### Fix

Use float-compatible format codes like `f`, convert the scalar to an `int`/`float` explicitly, or format with NumPy-aware conversion before using the format specifier.

#### Wrong code

```python
import numpy as np
print("{:d}".format(np.float64(3.14)))  # TypeError
```

#### Fixed code

```python
import numpy as np
# Option 1: use float format
print("{:.2f}".format(np.float64(3.14)))  # 3.14

# Option 2: explicitly convert to int if required
print("{:d}".format(int(np.float64(3.14))))  # 3

# Option 3: convert to native python float
print("{:.1f}".format(float(np.float64(3.14))))  # 3.1
```
