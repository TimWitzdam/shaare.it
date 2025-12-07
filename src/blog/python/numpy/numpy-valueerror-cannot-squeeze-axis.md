---
title: "ValueError: cannot squeeze axis with size > 1"
description: "Errors from using np.squeeze on axes that are not singleton dimensions."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ValueError: cannot squeeze axis

```bash
$ python -c "import numpy as np; a=np.zeros((2,3)); np.squeeze(a, axis=0)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: cannot select an axis to squeeze out which has size not equal to one
```

### Why this happens

np.squeeze removes dimensions of size 1. If you request squeezing an axis whose size is greater than 1, NumPy raises this error.

### Fix

Only squeeze axes that are singleton (size 1), or reshape/reindex the array appropriately.

#### Wrong code

```python
import numpy as np
a = np.zeros((2,3))
np.squeeze(a, axis=0)
```

#### Fixed code

```python
import numpy as np
# correct use on singleton dimension
b = np.zeros((1,3))
b = np.squeeze(b, axis=0)

# or reshape explicitly
c = a.reshape(2*3)
```
