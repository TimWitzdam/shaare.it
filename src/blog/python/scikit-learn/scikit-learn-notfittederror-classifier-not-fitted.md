---
title: "NotFittedError: This classifier is not fitted yet"
description: "Avoiding NotFittedError by fitting estimators before predict/score in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## NotFittedError: classifier not fitted

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; clf=LogisticRegression(); clf.predict([[0,1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
NotFittedError: This LogisticRegression instance is not fitted yet.
```

### Why this happens

- `predict` or `score` called before `fit`.

### Fix

- Fit the estimator with training data first.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression()
clf.predict([[0,1]])
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression(max_iter=500)
clf.fit([[0,1],[1,0],[0.5,0.5]],[0,1,0])
print(clf.predict([[0.2,0.8]]))
```
