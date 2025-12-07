---
title: "TypeError: object of type 'numpy.float64' has no len()"
description: "When len() is called on a NumPy scalar or float64 object."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: object of type 'numpy.float64' has no len()

```bash
$ python -c "import numpy as np; x = np.float64(1.0); len(x)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: object of type 'numpy.float64' has no len()'
```

### Why this happens

NumPy scalar types aren't sequences and therefore don't have a length. len() expects a sequence/collection.

### Fix

If you intended a sequence, create a 1-D array or list. If you just need the value, avoid len() and use Python's numeric operations.

#### Wrong code

```python
import numpy as np
val = np.float64(3.14)
print(len(val))
```

#### Fixed code

```python
import numpy as np
val = np.array([3.14])
print(len(val))  # now 1
# or
val = np.float64(3.14)
print(float(val))
```
