---
title: "TypeError: invalid dtype for ufunc or No loop matching types"
description: "Errors when applying ufuncs to unsupported dtypes or mixed incompatible types."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: invalid dtype for ufunc / ufunc has no loop with signature

```bash
$ python -c "import numpy as np; np.add('a','b')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: ufunc 'add' did not contain a loop with signature matching types (dtype('<U1'), dtype('<U1')) -> None
```

### Why this happens

A universal function (ufunc) doesn't support the provided data types or there's no casting path between them. This commonly occurs with object arrays, strings, or custom dtypes.

### Fix

Convert arrays to a supported dtype (e.g., numeric). Use explicit casting with astype, or operate elementwise in Python if appropriate.

#### Wrong code

```python
import numpy as np
a = np.array(['1','2'])
b = np.array(['3','4'])
print(np.add(a, b))
```

#### Fixed code

```python
import numpy as np
a = np.array(['1','2']).astype(int)
b = np.array(['3','4']).astype(int)
print(np.add(a, b))

# or use vectorized python-level operation for non-numeric data
```
