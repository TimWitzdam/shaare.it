---
title: "TypeError: KNeighbors weights invalid"
description: "Use 'uniform', 'distance', or a callable for KNN weights correctly."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: invalid weights for KNN

```bash
$ python -c "from sklearn.neighbors import KNeighborsClassifier; KNeighborsClassifier(weights='invalid').fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: weights must be 'uniform', 'distance', or a callable
```

### Why this happens

Unsupported weight schemes cause type errors.

### Fix

Choose `'uniform'`, `'distance'`, or pass a callable `func(distances)`.

#### Wrong code

```python
from sklearn.neighbors import KNeighborsClassifier
KNeighborsClassifier(weights='invalid')
```

#### Fixed code

```python
from sklearn.neighbors import KNeighborsClassifier
KNeighborsClassifier(weights='distance')
```
