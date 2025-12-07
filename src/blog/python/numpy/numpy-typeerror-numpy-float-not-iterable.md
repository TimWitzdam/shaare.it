---
title: "TypeError: 'numpy.float64' object is not iterable"
description: "Raised when treating NumPy scalar types like iterables."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: 'numpy.float64' object is not iterable

```bash
$ python -c "import numpy as np; x = np.float64(1.23); for v in x: print(v)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'numpy.float64' object is not iterable
```

### Why this happens

NumPy scalar types (e.g., `np.float64`, `np.int32`) are single values, not sequences. Iteration only works on arrays or sequences.

### Fix

Ensure you're iterating over an array or wrap the scalar in a sequence if you intended to loop over multiple items.

#### Wrong code

```python
import numpy as np
x = np.float64(1.23)
for v in x:
    print(v)
```

#### Fixed code

```python
import numpy as np
x = np.array([np.float64(1.23)])
for v in x:
    print(v)

# or convert to Python scalar
val = float(x)
print(val)
```
