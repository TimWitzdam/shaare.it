---
title: "ValueError: y should be a 1d array, got an array of shape (n, m)"
description: "Reshaping target arrays to 1D for classifiers/regressors in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: y should be 1d

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; import numpy as np; X=np.random.rand(5,2); y=np.random.rand(5,2); LogisticRegression().fit(X,y)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: y should be a 1d array, got an array of shape (5, 2).
```

### Why this happens

- Provided a 2D target to an estimator expecting 1D labels.

### Fix

- Squeeze/reshape `y` to 1D or use multioutput estimators when appropriate.

#### Wrong code

```python
LogisticRegression().fit(X, y_2d)
```

#### Fixed code

```python
LogisticRegression().fit(X, y_2d[:,0])
```
