---
title: "ValueError: 'solver' must be one of lbfgs, liblinear, saga, newton-cg"
description: "scikit-learn logistic regression invalid solver error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: logistic solver invalid

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression(solver='adam').fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Solver 'adam' is not supported
```

### Why this happens

LogisticRegression only supports specific solvers.

### Fix

Pick a supported solver that matches your penalty and multi_class setting.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression(solver='adam')
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression(solver='lbfgs', max_iter=200)
```
