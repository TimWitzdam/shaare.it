---
title: "ValueError: C must be positive (LogisticRegression/SVC)"
description: "Setting positive regularization inverse C for classifiers to avoid parameter errors in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: C must be positive

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression(C=0).fit([[0,1],[1,0]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: C <= 0 is not allowed for this solver.
```

### Why this happens

- `C` must be strictly positive.

### Fix

- Set `C > 0`.

#### Wrong code

```python
LogisticRegression(C=0).fit(X, y)
```

#### Fixed code

```python
LogisticRegression(C=1.0).fit(X, y)
```
