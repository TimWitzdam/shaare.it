---
title: "ValueError: LinearRegression fit_intercept invalid type"
description: "Ensure fit_intercept is boolean for LinearRegression and similar estimators."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: fit_intercept must be bool

```bash
$ python -c "from sklearn.linear_model import LinearRegression; LinearRegression(fit_intercept='yes').fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: fit_intercept must be a boolean
```

### Why this happens

`fit_intercept` expects `True` or `False`. Strings or numbers are invalid.

### Fix

Pass a boolean according to whether you want an intercept term.

#### Wrong code

```python
from sklearn.linear_model import LinearRegression
LinearRegression(fit_intercept='yes')
```

#### Fixed code

```python
from sklearn.linear_model import LinearRegression
LinearRegression(fit_intercept=True)
```
