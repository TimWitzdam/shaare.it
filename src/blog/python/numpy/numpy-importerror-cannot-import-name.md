---
title: "ImportError: cannot import name 'foo' from 'numpy'"
description: "When an import from NumPy fails because the symbol doesn't exist or is from a different submodule."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## ImportError: cannot import name

```bash
$ python -c "from numpy import foo"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'foo' from 'numpy' (/usr/lib/python3/dist-packages/numpy/__init__.py)
```

### Why this happens

The name you're trying to import doesn't exist in the package's public API, or it lives in a different submodule. Sometimes the symbol was removed, renamed, or you mistyped it.

### Fix

Import the correct symbol from the correct submodule, check the NumPy documentation for the right name, or update NumPy if you rely on a newly-introduced API.

#### Wrong code

```python
from numpy import foo

# using foo()
```

#### Fixed code

```python
# If the symbol lives in numpy.random:
from numpy.random import default_rng
rng = default_rng()

# Or import the correct function you intended, e.g. from numpy import mean
import numpy as np
print(np.mean([1, 2, 3]))
```
