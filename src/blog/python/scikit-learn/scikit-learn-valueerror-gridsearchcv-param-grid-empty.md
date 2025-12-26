---
title: "ValueError: GridSearchCV param_grid is empty"
description: "Troubleshoot empty or malformed param_grid in GridSearchCV."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: param_grid empty

```bash
$ python -c "from sklearn.model_selection import GridSearchCV; from sklearn.linear_model import LogisticRegression; GridSearchCV(LogisticRegression(), param_grid={}).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Parameter grid is empty
```

### Why this happens

`param_grid` must have at least one hyperparameter with candidate values. Passing an empty dict or lists of length 0 yields no combinations.

### Fix

Provide a non-empty grid with valid estimator parameter names.

#### Wrong code

```python
from sklearn.model_selection import GridSearchCV
from sklearn.linear_model import LogisticRegression
GridSearchCV(LogisticRegression(), param_grid={}).fit([[0],[1]], [0,1])
```

#### Fixed code

```python
from sklearn.model_selection import GridSearchCV
from sklearn.linear_model import LogisticRegression
GridSearchCV(LogisticRegression(), param_grid={'C': [0.1, 1, 10]}).fit([[0],[1]], [0,1])
```
