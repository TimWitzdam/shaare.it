---
title: "TypeError: unsupported operand type(s) for +: 'int' and 'list' (example)"
description: "When using arithmetic operators on arrays with incompatible element types."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## unsupported operand types

```bash
$ python - <<'PY'
import numpy as np
arr = np.array([1, 2, 3], dtype=object)
arr + [4]
PY
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
TypeError: unsupported operand type(s) for +: 'int' and 'list'
```

### Why this happens

Object dtype arrays hold arbitrary Python objects. Using ufuncs or operators expects element-level compatibility; adding incompatible types raises TypeError.

### Fix

Use numeric dtypes when possible. Convert lists to arrays or ensure broadcastable shapes and compatible element types.

#### Wrong code

```python
import numpy as np
arr = np.array([1, 2, 3], dtype=object)
arr + [4]
```

#### Fixed code

```python
import numpy as np
arr = np.array([1, 2, 3])
arr + np.array([4, 4, 4])
```

---

title: "TypeError: unsupported operand type(s) for +: 'numpy.ndarray' and 'str'"
description: "Mixing incompatible types in NumPy operations and how to fix them."
date: 2025-12-07
tags: ["python", "numpy", "errors"]

---

## TypeError: unsupported operand types for + with numpy.ndarray

```bash
$ python -c "import numpy as np; np.array([1,2]) + 'a'"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: unsupported operand type(s) for +: 'numpy.ndarray' and 'str'
```

### Why this happens

You're attempting an element-wise operation between incompatible types (numeric array and string), which NumPy can't perform.

### Fix

Convert types to compatible dtypes (e.g., all strings or all numbers), or perform the intended operation using Python lists or vectorized string methods (np.char).

#### Wrong code

```python
import numpy as np
print(np.array([1,2]) + 'a')
```

#### Fixed code (convert to strings)

```python
import numpy as np
print(np.array([1,2]).astype(str) + 'a')

# or use numeric addition
print(np.array([1,2]) + np.array([3,4]))
```
