---
title: "ValueError: Probability estimates not available for this estimator"
description: "Choosing estimators with probability support or enabling options to avoid probability errors in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: probability not available

```bash
$ python -c "from sklearn.svm import SVR; SVR().predict_proba([[0,1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'SVR' object has no attribute 'predict_proba'
```

### Why this happens

- Regression estimators don’t have `predict_proba`.

### Fix

- Use classification estimators that implement `predict_proba`.

#### Wrong code

```python
from sklearn.svm import SVR
SVR().predict_proba([[0,1]])
```

#### Fixed code

```python
from sklearn.svm import SVC
SVC(probability=True).fit([[0,1],[1,0],[0.5,0.5]],[0,1,0]).predict_proba([[0.2,0.8]])
```
