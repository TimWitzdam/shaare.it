---
title: "ValueError: 'n_neighbors' must be >= 1"
description: "scikit-learn KNN error when n_neighbors is invalid and how to fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: n_neighbors out of range

```bash
$ python -c "from sklearn.neighbors import KNeighborsClassifier; KNeighborsClassifier(n_neighbors=0).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: n_neighbors must be >= 1
```

### Why this happens

KNN needs at least one neighbor for voting.

### Fix

Set n_neighbors to a positive integer.

#### Wrong code

```python
from sklearn.neighbors import KNeighborsClassifier
KNeighborsClassifier(n_neighbors=0)
```

#### Fixed code

```python
from sklearn.neighbors import KNeighborsClassifier
KNeighborsClassifier(n_neighbors=5)
```
