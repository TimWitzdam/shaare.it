---
title: "UFuncTypeError: ufunc did not contain a loop with signature matching types"
description: "When ufuncs can't operate on given dtypes and how to cast or convert them."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## UFuncTypeError: ufunc did not contain a loop matching types

```bash
$ python -c "import numpy as np; np.add(np.array([1,2]), np.array(['a','b']))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: ufunc 'add' did not contain a loop with signature matching types (dtype('int64'), dtype('<U1')) -> None
```

### Why this happens

NumPy's universal functions (ufuncs) need compatible dtypes. If you mix incompatible dtypes that the ufunc doesn't know how to handle, it fails.

### Fix

Cast arrays to compatible types before calling the ufunc (e.g., cast strings to numbers when appropriate, or use object dtype and implement custom logic).

#### Wrong code

```python
import numpy as np
print(np.add(np.array([1,2]), np.array(['a','b'])))
```

#### Fixed code

```python
import numpy as np
print(np.add(np.array([1,2]), np.array([3,4])))

# or convert strings to numbers if they represent numbers
print(np.add(np.array([1,2]), np.array(['3','4']).astype(int)))
```
