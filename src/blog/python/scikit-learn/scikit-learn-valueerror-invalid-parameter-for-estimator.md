---
title: "ValueError: Invalid parameter 'foo' for estimator"
description: "Passing only supported parameters to scikit-learn estimators to avoid invalid parameter errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid parameter for estimator

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression(foo=1)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: __init__() got an unexpected keyword argument 'foo'
```

### Why this happens

- Passing parameters not defined in the estimator’s constructor.

### Fix

- Check estimator docs for valid arguments.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression(foo=1)
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression(C=1.0, max_iter=500)
```
