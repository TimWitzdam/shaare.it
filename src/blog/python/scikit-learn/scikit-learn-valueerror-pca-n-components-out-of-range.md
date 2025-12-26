---
title: "ValueError: n_components must be between 0 and n_features (PCA)"
description: "Setting valid PCA n_components and handling edge cases."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: PCA n_components out of range

```bash
$ python -c "from sklearn.decomposition import PCA; import numpy as np; X=np.random.rand(5,2); PCA(n_components=3).fit(X)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: n_components=3 must be between 0 and min(n_samples, n_features)=2.
```

### Why this happens

- `n_components` too large for the data.

### Fix

- Choose `n_components <= min(n_samples, n_features)`.

#### Wrong code

```python
PCA(n_components=3).fit(X)
```

#### Fixed code

```python
PCA(n_components=2).fit(X)
```
