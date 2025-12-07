---
title: "ValueError: The truth value of an array with more than one element is ambiguous"
description: "Why numpy raises an ambiguous truth value error and how to fix boolean checks on arrays."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## The truth value of an array is ambiguous

```bash
$ python - <<'PY'
import numpy as np
arr = np.array([1, 2, 3])
if arr:
    print("truthy")
PY
Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
ValueError: The truth value of an array with more than one element is ambiguous. Use a.any() or a.all()
```

### Why this happens

NumPy arrays don't define a single boolean value when they contain multiple elements. Using an array directly in a boolean context (if, and, or, not) is undefined.

### Fix

Decide whether you mean "any element is truthy" or "all elements are truthy" and use `arr.any()` or `arr.all()`. For comparisons use explicit elementwise checks.

#### Wrong code

```python
import numpy as np
arr = np.array([0, 1, 2])
if arr:
    print("do stuff")
```

#### Fixed code

```python
import numpy as np
arr = np.array([0, 1, 2])
if arr.any():
    print("at least one nonzero element")

# or
if arr.all():
    print("all elements are nonzero")
```
