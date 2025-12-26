---
title: "ValueError: SVC gamma must be > 0"
description: "Why SVC/SVR gamma must be positive and how to fix invalid values."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: gamma must be positive

```bash
$ python -c "from sklearn.svm import SVC; SVC(gamma=-1).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: gamma must be > 0
```

### Why this happens

`gamma` controls the influence radius of support vectors in the RBF/poly/sigmoid kernels. Negative or zero values are invalid.

### Fix

Use a positive value (e.g., `gamma=0.1`) or `'scale'`/`'auto'` to let scikit-learn set it.

#### Wrong code

```python
from sklearn.svm import SVC
clf = SVC(kernel='rbf', gamma=0)
clf.fit([[0],[1]], [0,1])
```

#### Fixed code

```python
from sklearn.svm import SVC
clf = SVC(kernel='rbf', gamma='scale')
clf.fit([[0],[1]], [0,1])
```
