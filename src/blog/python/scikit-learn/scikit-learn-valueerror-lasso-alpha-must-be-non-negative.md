---
title: "ValueError: Lasso alpha must be non-negative"
description: "Pick valid regularization strength for Lasso/ElasticNet family."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: alpha must be non-negative

```bash
$ python -c "from sklearn.linear_model import Lasso; Lasso(alpha=-1).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: alpha must be >= 0
```

### Why this happens

Regularization strength must be non-negative. Negative alpha breaks optimization.

### Fix

Use `alpha >= 0`, e.g., `alpha=0.1`.

#### Wrong code

```python
from sklearn.linear_model import Lasso
Lasso(alpha=-0.5)
```

#### Fixed code

```python
from sklearn.linear_model import Lasso
Lasso(alpha=0.1)
```
