---
title: "TypeError: Pipeline set_params wrong types"
description: "Fix wrong parameter types when setting Pipeline hyperparameters."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: set_params wrong types

```bash
$ python -c "from sklearn.pipeline import Pipeline; from sklearn.linear_model import LogisticRegression; p=Pipeline([('clf', LogisticRegression())]); p.set_params(clf__C='high')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: Invalid type for parameter C: expected float, got str
```

### Why this happens

Passing wrong types (e.g., string instead of float) to estimator parameters leads to type errors at validation or fit.

### Fix

Use the correct types as defined by the estimator.

#### Wrong code

```python
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
p = Pipeline([('clf', LogisticRegression())])
p.set_params(clf__C='high')
```

#### Fixed code

```python
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
p = Pipeline([('clf', LogisticRegression())])
p.set_params(clf__C=1.0)
```
