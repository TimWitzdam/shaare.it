---
title: "ValueError: KernelRidge alpha must be non-negative"
description: "Use non-negative regularization for KernelRidge models to avoid errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: KernelRidge alpha must be >= 0

```bash
$ python -c "from sklearn.kernel_ridge import KernelRidge; KernelRidge(alpha=-1.0).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: alpha must be >= 0
```

### Why this happens

Negative regularization is invalid.

### Fix

Set `alpha` to `>= 0`.

#### Wrong code

```python
from sklearn.kernel_ridge import KernelRidge
KernelRidge(alpha=-0.1)
```

#### Fixed code

```python
from sklearn.kernel_ridge import KernelRidge
KernelRidge(alpha=1.0)
```
