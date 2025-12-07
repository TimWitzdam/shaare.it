---
title: "AttributeError: module 'numpy' has no attribute 'random'"
description: "Missing attributes like 'random' because of shadowing or version differences."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## AttributeError: module 'numpy' has no attribute 'random'

```bash
$ python -c "import numpy as np; np.random.randn(3)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: module 'numpy' has no attribute 'random'
```

### Why this happens

Common reasons: a local file named `numpy.py` or a package named `numpy` is shadowing the real NumPy; an extremely old NumPy version; or an import mistake overwritten the name `numpy`.

### Fix

Check your working directory for `numpy.py` or folders named `numpy`. Rename them. Verify import path with `print(numpy.__file__)` and upgrade NumPy if needed.

#### Wrong code

```python
# project root contains numpy.py which shadows real numpy
import numpy as np
print(np.random.randn(3))
```

#### Fixed code

```python
# rename local module to avoid shadowing
import numpy as np
print(np.random.default_rng().standard_normal(3))

# verify
import numpy
print(numpy.__file__)
```
