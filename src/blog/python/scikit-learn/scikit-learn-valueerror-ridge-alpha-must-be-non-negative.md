---
title: "ValueError: alpha must be >= 0 (Ridge/Lasso)"
description: "Ensuring regularization strength parameters are non-negative for linear models in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: alpha must be non-negative

```bash
$ python -c "from sklearn.linear_model import Ridge; Ridge(alpha=-1).fit([[0,1],[1,0]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: alpha must be >= 0.
```

### Why this happens

- Regularization parameter `alpha` was set negative.

### Fix

- Use `alpha >= 0`.

#### Wrong code

```python
from sklearn.linear_model import Ridge
Ridge(alpha=-1).fit(X, y)
```

#### Fixed code

```python
from sklearn.linear_model import Ridge
Ridge(alpha=1.0).fit(X, y)
```
