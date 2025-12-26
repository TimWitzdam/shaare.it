---
title: "TypeError: KNeighbors n_neighbors out of range"
description: "Pick a valid number of neighbors for KNN algorithms relative to sample size."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: n_neighbors out of range

```bash
$ python -c "from sklearn.neighbors import KNeighborsClassifier; KNeighborsClassifier(n_neighbors=0).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: n_neighbors must be an integer >= 1 and <= n_samples
```

### Why this happens

Setting `n_neighbors` to 0 or larger than the number of training samples is invalid.

### Fix

Use `1 <= n_neighbors <= n_samples`.

#### Wrong code

```python
from sklearn.neighbors import KNeighborsClassifier
KNeighborsClassifier(n_neighbors=0)
```

#### Fixed code

```python
from sklearn.neighbors import KNeighborsClassifier
KNeighborsClassifier(n_neighbors=3)
```
