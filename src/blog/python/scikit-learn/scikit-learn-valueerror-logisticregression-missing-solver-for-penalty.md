---
title: "ValueError: LogisticRegression penalty requires compatible solver"
description: "Choose solver compatible with selected penalty in LogisticRegression."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: penalty solver mismatch

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression(penalty='l1', solver='lbfgs').fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Solver lbfgs supports only l2 or none penalty
```

### Why this happens

Some solvers support only specific penalties.

### Fix

Use compatible pairs, e.g., `solver='liblinear'` or `'saga'` for `penalty='l1'`.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression(penalty='l1', solver='lbfgs')
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression(penalty='l1', solver='saga')
```
