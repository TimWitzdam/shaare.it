---
title: "ValueError: 'epsilon' must be >= 0 for HuberRegressor"
description: "scikit-learn HuberRegressor epsilon constraint error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: HuberRegressor epsilon out of range

```bash
$ python -c "from sklearn.linear_model import HuberRegressor; HuberRegressor(epsilon=-1).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: epsilon must be >= 0
```

### Why this happens

Epsilon sets the transition point and can't be negative.

### Fix

Use a non-negative float.

#### Wrong code

```python
from sklearn.linear_model import HuberRegressor
HuberRegressor(epsilon=-1)
```

#### Fixed code

```python
from sklearn.linear_model import HuberRegressor
HuberRegressor(epsilon=1.35)
```
