---
title: "TypeError: GaussianProcess alpha must be non-negative"
description: "Use non-negative alpha (noise level) in GaussianProcessRegressor/Classifier."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: GPR alpha must be non-negative

```bash
$ python -c "from sklearn.gaussian_process import GaussianProcessRegressor; GaussianProcessRegressor(alpha=-1.0).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: alpha must be >= 0
```

### Why this happens

Alpha represents observation noise variance; it cannot be negative.

### Fix

Use a small positive value or array.

#### Wrong code

```python
from sklearn.gaussian_process import GaussianProcessRegressor
GaussianProcessRegressor(alpha=-0.1)
```

#### Fixed code

```python
from sklearn.gaussian_process import GaussianProcessRegressor
GaussianProcessRegressor(alpha=1e-10)
```
