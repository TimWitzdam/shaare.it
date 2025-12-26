---
title: "ValueError: StackingClassifier needs predict_proba"
description: "Fix base estimators that do not provide predict_proba in stacking."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: stacking needs predict_proba

```bash
$ python -c "from sklearn.ensemble import StackingClassifier; from sklearn.svm import LinearSVC; StackingClassifier(estimators=[('svm', LinearSVC())]).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: All base classifiers must implement predict_proba when using probability stacking
```

### Why this happens

Stacked probability features require base classifiers to output class probabilities. Estimators without `predict_proba` are incompatible with that mode.

### Fix

Choose base estimators that implement `predict_proba`, or configure stacking to use decision functions instead.

#### Wrong code

```python
from sklearn.ensemble import StackingClassifier
from sklearn.svm import LinearSVC
stk = StackingClassifier(estimators=[('svm', LinearSVC())])
stk.fit([[0],[1]], [0,1])
```

#### Fixed code

```python
from sklearn.ensemble import StackingClassifier
from sklearn.linear_model import LogisticRegression
stk = StackingClassifier(estimators=[('lr', LogisticRegression())])
stk.fit([[0],[1]], [0,1])
```
