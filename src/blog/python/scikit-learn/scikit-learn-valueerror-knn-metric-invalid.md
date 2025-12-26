---
title: "ValueError: 'metric' is not valid for KNN"
description: "scikit-learn KNN invalid metric errors and solutions."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: KNN metric invalid

```bash
$ python -c "from sklearn.neighbors import KNeighborsClassifier; KNeighborsClassifier(metric='unknown').fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Invalid metric: unknown
```

### Why this happens

You used a metric not supported by KNN. Valid options include 'minkowski', 'euclidean', 'manhattan'.

### Fix

Choose a supported metric and set p accordingly.

#### Wrong code

```python
from sklearn.neighbors import KNeighborsClassifier
KNeighborsClassifier(metric='cosine')
```

#### Fixed code

```python
from sklearn.neighbors import KNeighborsClassifier
# Euclidean distance
KNeighborsClassifier(metric='minkowski', p=2)
# Manhattan distance
KNeighborsClassifier(metric='minkowski', p=1)
```
