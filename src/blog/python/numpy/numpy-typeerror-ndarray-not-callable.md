---
title: "TypeError: 'numpy.ndarray' object is not callable"
description: "Mistaking array indexing for function call, causing ndarray to be treated as callable."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: 'numpy.ndarray' object is not callable

```bash
$ python -c "import numpy as np; a = np.array([1,2]); a(0)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'numpy.ndarray' object is not callable
```

### Why this happens

You used parentheses instead of square brackets to index an array (treating the array like a function).

### Fix

Use square brackets for indexing, or if you intended a function call, ensure the object is callable.

#### Wrong code

```python
import numpy as np
a = np.array([1, 2])
val = a(0)
```

#### Fixed code

```python
import numpy as np
a = np.array([1, 2])
val = a[0]
```
