---
title: "AttributeError: module 'numpy' has no attribute 'foo'"
description: "Missing function or attribute lookup errors in NumPy and how to resolve them."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## AttributeError: module 'numpy' has no attribute

```bash
$ python -c "import numpy as np; np.foo()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: module 'numpy' has no attribute 'foo'
```

### Why this happens

The attribute or function doesn't exist in NumPy (typo, wrong version) or you shadowed the numpy name with a local file named `numpy.py`.

### Fix

Check spelling, update NumPy if the feature is added in newer versions, and ensure no local modules shadow NumPy. Rename local files if necessary.

#### Wrong code

```python
import numpy as np
np.foo()
```

#### Fixed code

```python
import numpy as np
print(np.array([1,2]))

# If you intended a different function, use the correct one, e.g. np.flip, np.mean, etc.
```
