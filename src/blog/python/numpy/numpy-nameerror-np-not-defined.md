---
title: "NameError: name 'np' is not defined"
description: "Common NameError when using the shorthand `np` without importing NumPy or when the alias is missing."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## NameError: name 'np' is not defined

```bash
$ python -c "arr = np.array([1,2,3])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
NameError: name 'np' is not defined
```

### Why this happens

You used the common alias `np` but didn't import NumPy as that alias in the current scope. This can happen when you forget `import numpy as np` or if the import failed.

### Fix

Import NumPy with the standard alias (`import numpy as np`) at the top of your script or interactive session. Ensure the import succeeded (no ImportError).

#### Wrong code

```python
arr = np.array([1, 2, 3])
```

#### Fixed code

```python
import numpy as np
arr = np.array([1, 2, 3])
print(arr)
```
