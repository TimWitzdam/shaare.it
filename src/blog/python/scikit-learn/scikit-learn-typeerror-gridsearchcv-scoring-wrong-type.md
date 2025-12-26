---
title: "TypeError: GridSearchCV scoring has wrong type"
description: "Use proper scoring function names or callables for GridSearchCV."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: invalid scoring type

```bash
$ python -c "from sklearn.model_selection import GridSearchCV; from sklearn.linear_model import LogisticRegression; GridSearchCV(LogisticRegression(), param_grid={'C':[1]}, scoring=123).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: scoring must be a string, callable, or dict of such
```

### Why this happens

`scoring` expects a valid metric string, a callable with signature `(estimator, X, y)`, or a dict mapping names to scorers.

### Fix

Use a supported metric name like `'accuracy'` or a proper callable.

#### Wrong code

```python
from sklearn.model_selection import GridSearchCV
from sklearn.linear_model import LogisticRegression
GridSearchCV(LogisticRegression(), {'C':[1]}, scoring=123)
```

#### Fixed code

```python
from sklearn.model_selection import GridSearchCV
from sklearn.linear_model import LogisticRegression
GridSearchCV(LogisticRegression(), {'C':[1]}, scoring='accuracy')
```
