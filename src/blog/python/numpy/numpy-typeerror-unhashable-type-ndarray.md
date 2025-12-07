---
title: "TypeError: unhashable type: 'numpy.ndarray'"
description: "Why NumPy arrays can't be used as dict keys or set members and how to fix it."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: unhashable type: 'numpy.ndarray'

```bash
$ python -c "import numpy as np; d = {}; d[np.array([1,2])] = 1"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: unhashable type: 'numpy.ndarray'
```

### Why this happens

NumPy arrays are mutable and therefore not hashable by design. Python dict keys and set elements must be hashable (immutable) objects.

### Fix

Use an immutable equivalent as a key: convert the array to a tuple, or use the array's bytes representation or a hash of its contents.

#### Wrong code

```python
import numpy as np
d = {}
arr = np.array([1,2])
d[arr] = 'value'
```

#### Fixed code

```python
import numpy as np
arr = np.array([1,2])
d = {}
d[tuple(arr)] = 'value'  # tuples are hashable
```
