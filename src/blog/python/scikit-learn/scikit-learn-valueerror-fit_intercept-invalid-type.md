---
title: "ValueError: 'fit_intercept' must be bool"
description: "scikit-learn estimators require fit_intercept to be a boolean; error and fix examples."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: fit_intercept invalid type

```bash
$ python -c "from sklearn.linear_model import Ridge; Ridge(fit_intercept='yes').fit([[1],[2]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: fit_intercept must be a boolean
```

### Why this happens

Wrong type.

### Fix

Use True/False.

#### Wrong code

```python
from sklearn.linear_model import Ridge
Ridge(fit_intercept='yes')
```

#### Fixed code

```python
from sklearn.linear_model import Ridge
Ridge(fit_intercept=True)
```
