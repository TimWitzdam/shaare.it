---
title: "ValueError: Solver not supported for given penalty (LogisticRegression)"
description: "Matching solver and penalty combinations in LogisticRegression to avoid incompatibility errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: logistic solver vs penalty

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression(penalty='l1', solver='lbfgs').fit([[0,1],[1,0],[1,1]],[0,1,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Solver lbfgs supports only 'l2' or 'none' penalties.
```

### Why this happens

- Using a solver that doesn’t support the chosen penalty.

### Fix

- Use compatible pairs, e.g., `penalty='l1'` with `solver='liblinear'` or `saga`.

#### Wrong code

```python
LogisticRegression(penalty='l1', solver='lbfgs').fit(X, y)
```

#### Fixed code

```python
LogisticRegression(penalty='l1', solver='liblinear').fit(X, y)
```
