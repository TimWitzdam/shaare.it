---
title: "TypeError: GaussianProcess kernel invalid type"
description: "Provide a valid kernel object or sum/product of kernels for Gaussian processes."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: invalid kernel for GPR

```bash
$ python -c "from sklearn.gaussian_process import GaussianProcessRegressor; GaussianProcessRegressor(kernel='rbf').fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: kernel must be a Kernel instance, not str
```

### Why this happens

Kernel must be constructed from kernel classes (e.g., RBF, Matern).

### Fix

Use `RBF()`, `Matern()`, etc., and compose via `+` or `*` operators.

#### Wrong code

```python
from sklearn.gaussian_process import GaussianProcessRegressor
GaussianProcessRegressor(kernel='rbf')
```

#### Fixed code

```python
from sklearn.gaussian_process import GaussianProcessRegressor
from sklearn.gaussian_process.kernels import RBF
GaussianProcessRegressor(kernel=RBF(1.0))
```
