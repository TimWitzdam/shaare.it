---
title: "ValueError: Expected 2D array, got scalar array instead"
description: "Providing correctly shaped input arrays to scikit-learn estimators to avoid scalar shape errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: expected 2D got scalar

```bash
$ python -c "from sklearn.preprocessing import StandardScaler; StandardScaler().fit(1.0)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'float' object is not iterable
```

### Why this happens

- Passing a single number instead of a 2D array.

### Fix

- Reshape to 2D with shape `(n_samples, n_features)`.

#### Wrong code

```python
StandardScaler().fit(1.0)
```

#### Fixed code

```python
import numpy as np
StandardScaler().fit(np.array([[1.0],[2.0],[3.0]]))
```
