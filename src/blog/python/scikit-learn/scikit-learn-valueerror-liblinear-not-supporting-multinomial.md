---
title: "ValueError: Solver 'liblinear' does not support multinomial"
description: "Choosing solvers compatible with multinomial logistic regression to avoid errors in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: liblinear not multinomial

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression(multi_class='multinomial', solver='liblinear').fit([[0,1],[1,0],[1,1]],[0,1,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Solver liblinear does not support multinomial.
```

### Why this happens

- Incompatible solver chosen for `multi_class='multinomial'`.

### Fix

- Use `lbfgs`, `saga`, or `newton-cg` with multinomial.

#### Wrong code

```python
LogisticRegression(multi_class='multinomial', solver='liblinear').fit(X, y)
```

#### Fixed code

```python
LogisticRegression(multi_class='multinomial', solver='lbfgs').fit(X, y)
```
