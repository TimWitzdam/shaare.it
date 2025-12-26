---
title: "ValueError: 'penalty' must be one of l1, l2, elasticnet, none"
description: "scikit-learn logistic regression invalid penalty selection and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: logistic penalty invalid

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression(penalty='l3').fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: penalty must be one of {'l1','l2','elasticnet','none'}
```

### Why this happens

Penalty option is not recognized.

### Fix

Choose a supported penalty compatible with solver.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression(penalty='l3', solver='lbfgs')
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression(penalty='l2', solver='lbfgs')
# or
LogisticRegression(penalty='l1', solver='liblinear')
```
