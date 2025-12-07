---
title: "RuntimeWarning: divide by zero encountered in ..."
description: "Warnings produced when division by zero occurs in a NumPy ufunc."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## RuntimeWarning: divide by zero encountered

```bash
$ python -c "import numpy as np; np.array([1.0]) / 0"
/tmp/ipykernel_12345/....py:1: RuntimeWarning: divide by zero encountered in true_divide
  np.array([1.0]) / 0
array([inf])
```

### Why this happens

You performed a division where the denominator is zero (or contains zeros). NumPy returns infinities or NaNs for floating-point divisions and emits a runtime warning.

### Fix

Filter or mask zero denominators, use np.divide with out and where parameters, or replace zeros before division.

#### Wrong code

```python
import numpy as np
x = np.array([1.0, 2.0])
y = np.array([0.0, 1.0])
print(x / y)
```

#### Fixed code

```python
import numpy as np
x = np.array([1.0, 2.0])
y = np.array([0.0, 1.0])
# safe divide using where
result = np.divide(x, y, out=np.zeros_like(x), where=y!=0)
print(result)

# or mask zeros
y_safe = np.where(y==0, np.nan, y)
print(x / y_safe)
```
