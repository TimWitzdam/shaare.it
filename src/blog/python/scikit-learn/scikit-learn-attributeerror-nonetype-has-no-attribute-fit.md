---
title: "AttributeError: 'NoneType' object has no attribute 'fit'"
description: "Diagnosing NoneType errors when calling fit on scikit-learn estimators."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## AttributeError: 'NoneType' object has no attribute 'fit'

```bash
$ python -c "clf=None; clf.fit([[0,1],[1,0]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'NoneType' object has no attribute 'fit'
```

### Why this happens

- Variable intended to hold an estimator is `None` due to conditional logic or failed initialization.

### Fix

- Instantiate the estimator properly before calling methods.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
clf = None
clf.fit([[0,1],[1,0]],[0,1])
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression(max_iter=500)
clf.fit([[0,1],[1,0]], [0,1])
print(clf.coef_)
```
