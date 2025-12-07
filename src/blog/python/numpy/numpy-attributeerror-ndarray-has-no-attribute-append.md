---
title: "AttributeError: 'numpy.ndarray' object has no attribute 'append'"
description: "Common mistake: treating NumPy arrays like Python lists and calling list methods."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## AttributeError: 'numpy.ndarray' object has no attribute 'append'

```bash
$ python -c "import numpy as np; a = np.array([1,2,3]); a.append(4)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'numpy.ndarray' object has no attribute 'append'
```

### Why this happens

NumPy arrays are fixed-size blocks of memory and don't support list methods like `append`. Users often confuse `list` API with `ndarray`.

### Fix

Use `np.append`, `np.concatenate`, or build a Python list and convert to an array when dynamically growing data.

#### Wrong code

```python
import numpy as np
a = np.array([1,2,3])
a.append(4)
```

#### Fixed code

```python
import numpy as np
a = np.array([1,2,3])
 a2 = np.append(a, 4)
print(a2)

# or use concatenate
 a3 = np.concatenate([a, np.array([4])])
print(a3)

# or collect in list then convert
lst = [1,2,3]
lst.append(4)
arr = np.array(lst)
```
