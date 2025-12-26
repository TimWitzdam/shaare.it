---
title: "ValueError: GridSearchCV param_grid contains invalid keys"
description: "Fix wrong parameter names and shapes in param_grid for GridSearchCV."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid param_grid keys

```bash
$ python -c "from sklearn.model_selection import GridSearchCV; from sklearn.linear_model import LogisticRegression; GridSearchCV(LogisticRegression(), param_grid={'invalid': [1,2]}).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Invalid parameter 'invalid' for estimator LogisticRegression
```

### Why this happens

Grid keys must match actual estimator parameters. Typos or parameters from a different estimator cause this error.

### Fix

Inspect `estimator.get_params()` and use correct keys.

#### Wrong code

```python
from sklearn.model_selection import GridSearchCV
from sklearn.linear_model import LogisticRegression
GridSearchCV(LogisticRegression(), param_grid={'gamma': [0.1, 1]})
```

#### Fixed code

```python
from sklearn.model_selection import GridSearchCV
from sklearn.linear_model import LogisticRegression
GridSearchCV(LogisticRegression(), param_grid={'C': [0.1, 1], 'penalty': ['l2']})
```
