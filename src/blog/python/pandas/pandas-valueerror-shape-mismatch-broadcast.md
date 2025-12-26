---
title: "ValueError: operands could not be broadcast together with shapes"
description: "Arithmetic/broadcast shape mismatches originating in numpy operations used with pandas objects."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: operands could not be broadcast together with shapes

```bash
$ python -c "import numpy as np; a = np.array([1,2]); b = np.array([1,2,3]); print(a + b)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: operands could not be broadcast together with shapes (2,) (3,)
```

### Why this happens

NumPy broadcasting rules require dimensions to be compatible. If you try to combine arrays with incompatible shapes (e.g., lengths differ and cannot be broadcast to a common shape), NumPy raises a ValueError. Pandas operations often rely on NumPy under the hood, so similar errors appear when performing element-wise operations or assignments with mismatched array shapes.

### Fix

Align shapes: reshape arrays, use broadcasting correctly, or use pandas index alignment functions (e.g., `reindex`) to ensure matching index lengths. For operations across rows/columns, confirm the shapes of operands.

#### Wrong code

```python
import numpy as np

# Arrays with different lengths -> cannot broadcast

a = np.array([1, 2])
b = np.array([1, 2, 3])
print(a + b)  # ValueError: operands could not be broadcast together with shapes (2,) (3,)
```

#### Fixed code

```python
import numpy as np

# Make shapes compatible using reshape or matching lengths

a = np.array([1, 2, 3])
b = np.array([1, 2, 3])
print(a + b)  # [2 4 6]

# Or reshape to broadcast along a new axis

a = np.array([1, 2, 3])
b = np.array([[1], [2], [3]])
print(a + b)  # broadcasted to shape (3, 3) as needed

# With Pandas, align by index if mixing Series/DataFrame
import pandas as pd

df = pd.DataFrame({'a': [1, 2, 3]})
arr = np.array([10, 20, 30])
df['b'] = arr  # works because shape matches

# Or reindex arrays to match DataFrame index before assignment
arr2 = np.array([10, 20])
try:
    df['c'] = arr2  # raises ValueError or index length mismatch
except ValueError:
    pass

# Proper fix: ensure arr2 matches df.index length, or repeat elements
arr2 = np.array([10, 20, 30])
df['c'] = arr2
```
