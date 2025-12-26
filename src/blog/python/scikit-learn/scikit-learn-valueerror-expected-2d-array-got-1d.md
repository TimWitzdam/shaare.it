---
title: "ValueError: Expected 2D array, got 1D array instead"
description: "Reshaping input arrays for scikit-learn estimators that require 2D features."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: Expected 2D array, got 1D

```bash
$ python -c "from sklearn.preprocessing import StandardScaler; StandardScaler().fit([0,1,2])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Expected 2D array, got 1D array instead: array=[0 1 2]. Reshape your data using array.reshape(-1, 1) if your data has a single feature.
```

### Why this happens

- Many estimators expect shape (n_samples, n_features).

### Fix

- Reshape 1D arrays to 2D, e.g. `np.array(x).reshape(-1, 1)`.

#### Wrong code

```python
from sklearn.preprocessing import StandardScaler
StandardScaler().fit([0,1,2])
```

#### Fixed code

```python
import numpy as np
from sklearn.preprocessing import StandardScaler
X = np.array([0,1,2]).reshape(-1, 1)
print(StandardScaler().fit_transform(X))
```
