---
title: "ValueError: Expected 2D array, got 3D array instead"
description: "Flattening or reshaping 3D arrays to 2D for estimators that require tabular inputs in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: Expected 2D array, got 3D

```bash
$ python -c "import numpy as np; from sklearn.linear_model import LogisticRegression; X=np.random.rand(5,2,2); LogisticRegression().fit(X.reshape(5,2,2), [0,1,0,1,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Found array with dim 3. Estimator expected <= 2.
```

### Why this happens

- Many models expect 2D features, not sequences/images.

### Fix

- Flatten or extract features to 2D.

#### Wrong code

```python
LogisticRegression().fit(X_3d, y)
```

#### Fixed code

```python
LogisticRegression().fit(X_3d.reshape(len(X_3d), -1), y)
```
