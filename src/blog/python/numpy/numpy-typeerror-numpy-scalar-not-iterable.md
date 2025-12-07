---
title: "TypeError: 'numpy.int64' object is not iterable"
description: "Common mistake of iterating over numpy scalar types or treating them as sequences."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## numpy scalar not iterable

```bash
$ python - <<'PY'
import numpy as np
val = np.int64(5)
for x in val:
    print(x)
PY
Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
TypeError: 'numpy.int64' object is not iterable
```

### Why this happens

NumPy scalar types like `np.int64` are not sequences. They behave like Python numbers, not containers.

### Fix

Wrap scalars in a list if you intend to iterate, or use arrays for vectorized operations.

#### Wrong code

```python
import numpy as np
val = np.int64(5)
for x in val:
    print(x)
```

#### Fixed code

```python
import numpy as np
val = np.int64(5)
for x in [val]:
    print(x)

# or use an array
arr = np.array([1,2,3])
for x in arr:
    print(x)
```
