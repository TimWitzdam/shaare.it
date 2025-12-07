---
title: "TypeError: 'axis' must be an integer (got float)"
description: "Errors from passing non-integer axis values to NumPy functions."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: 'axis' must be an integer

```bash
$ python -c "import numpy as np; a=np.zeros((2,3)); np.sum(a, axis=1.0)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'axis' must be an integer
```

### Why this happens

NumPy expects axis indices to be integers (or tuples of integers). Passing floats or other types raises this error.

### Fix

Convert axis values to int or validate inputs before calling NumPy. Use negative indices for counting from the end.

#### Wrong code

```python
import numpy as np
a = np.zeros((2,3))
np.sum(a, axis=1.0)
```

#### Fixed code

```python
import numpy as np
a = np.zeros((2,3))
np.sum(a, axis=int(1.0))
# or simply
np.sum(a, axis=1)
```
