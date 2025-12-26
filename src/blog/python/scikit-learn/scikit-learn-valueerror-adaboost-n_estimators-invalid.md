---
title: "ValueError: AdaBoost 'n_estimators' must be positive"
description: "scikit-learn AdaBoost n_estimators must be integer > 0; error and fix examples."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: AdaBoost n_estimators invalid

```bash
$ python -c "from sklearn.ensemble import AdaBoostClassifier; AdaBoostClassifier(n_estimators=0).fit([[0],[1],[2],[3]],[0,1,1,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: n_estimators must be > 0
```

### Why this happens

Needs at least one estimator.

### Fix

Set a positive integer.

#### Wrong code

```python
from sklearn.ensemble import AdaBoostClassifier
AdaBoostClassifier(n_estimators=0)
```

#### Fixed code

```python
from sklearn.ensemble import AdaBoostClassifier
AdaBoostClassifier(n_estimators=100)
```
