---
title: "ValueError: Cross-validated estimator failed to fit"
description: "Diagnosing failures during cross-validation fits in scikit-learn (invalid scoring/params)."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: cross_val fit fail

```bash
$ python -c "from sklearn.model_selection import cross_val_score; from sklearn.linear_model import LogisticRegression; import numpy as np; X=np.random.rand(10,2); y=np.random.randint(0,2,10); cross_val_score(LogisticRegression(), X, y, scoring='not_a_metric')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Unknown scoring: not_a_metric
```

### Why this happens

- Invalid scoring or parameters during CV.

### Fix

- Use valid scoring names and parameter grids.

#### Wrong code

```python
cross_val_score(LogisticRegression(), X, y, scoring='not_a_metric')
```

#### Fixed code

```python
cross_val_score(LogisticRegression(max_iter=500), X, y, scoring='accuracy')
```
