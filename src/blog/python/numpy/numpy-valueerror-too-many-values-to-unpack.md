---
title: "ValueError: too many values to unpack"
description: "Unpacking errors when functions return arrays or tuples with unexpected lengths."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## too many values to unpack

```bash
$ python - <<'PY'
import numpy as np
points = np.array([[0,0], [1,1], [2,2]])
x, y = points
PY
Traceback (most recent call last):
  File "<stdin>", line 4, in <module>
ValueError: too many values to unpack (expected 2)
```

### Why this happens

You attempted to unpack an array or iterable into fewer variables than there are elements. NumPy arrays may have shapes that produce more items than expected when iterating or unpacking.

### Fix

Check the shape of the array and either index into it properly, transpose when appropriate (`points.T`), or adjust the number of targets in the unpack.

#### Wrong code

```python
import numpy as np
points = np.array([[0,0], [1,1], [2,2]])
x, y = points
```

#### Fixed code

```python
import numpy as np
points = np.array([[0,0], [1,1], [2,2]])
# unpack coordinates into two arrays
x, y = points.T

# or iterate
for x, y in points:
    print(x, y)
```
