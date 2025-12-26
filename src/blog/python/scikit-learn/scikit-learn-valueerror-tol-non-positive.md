---
title: "ValueError: 'tol' must be positive"
description: "scikit-learn tolerance parameter invalid value errors and fixes across estimators."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: tol non-positive

```bash
$ python -c "from sklearn.linear_model import SGDClassifier; SGDClassifier(tol=0).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: tol must be > 0
```

### Why this happens

Tolerance thresholds must be positive.

### Fix

Provide a small positive number like 1e-3.

#### Wrong code

```python
from sklearn.linear_model import SGDClassifier
SGDClassifier(tol=0)
```

#### Fixed code

```python
from sklearn.linear_model import SGDClassifier
SGDClassifier(tol=1e-3)
```
