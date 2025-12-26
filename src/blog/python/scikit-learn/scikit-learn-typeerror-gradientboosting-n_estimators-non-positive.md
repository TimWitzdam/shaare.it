---
title: "TypeError: GradientBoosting n_estimators must be positive"
description: "Ensure a positive number of estimators for GradientBoosting models."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: n_estimators must be positive

```bash
$ python -c "from sklearn.ensemble import GradientBoostingClassifier; GradientBoostingClassifier(n_estimators=0).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: n_estimators must be an integer > 0
```

### Why this happens

Models require at least one estimator to fit.

### Fix

Use `n_estimators >= 1`.

#### Wrong code

```python
from sklearn.ensemble import GradientBoostingClassifier
GradientBoostingClassifier(n_estimators=0)
```

#### Fixed code

```python
from sklearn.ensemble import GradientBoostingClassifier
GradientBoostingClassifier(n_estimators=100)
```
