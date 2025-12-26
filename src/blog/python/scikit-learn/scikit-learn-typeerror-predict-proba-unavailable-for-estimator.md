---
title: "TypeError: predict_proba not available for this estimator"
description: "Understanding which estimators support probability outputs in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: predict_proba unavailable

```bash
$ python -c "from sklearn.svm import SVC; SVC().predict_proba([[0,1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'SVC' object has no attribute 'predict_proba'
```

### Why this happens

- Estimator doesn’t implement probability estimates by default.

### Fix

- Use `probability=True` for `SVC`, or choose an estimator that supports it.

#### Wrong code

```python
from sklearn.svm import SVC
SVC().predict_proba([[0,1]])
```

#### Fixed code

```python
from sklearn.svm import SVC
clf = SVC(probability=True)
clf.fit([[0,1],[1,0],[0.5,0.5]],[0,1,0])
print(clf.predict_proba([[0.2,0.8]]))
```
