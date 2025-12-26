---
title: "ValueError: DBSCAN 'metric' invalid"
description: "scikit-learn DBSCAN invalid metric error and how to choose supported metrics."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: DBSCAN metric invalid

```bash
$ python -c "from sklearn.cluster import DBSCAN; DBSCAN(metric='cosine').fit([[0],[1],[2]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: metric 'cosine' not supported by DBSCAN
```

### Why this happens

Metric must be supported by pairwise distance computation.

### Fix

Use 'euclidean','manhattan','minkowski' or a callable.

#### Wrong code

```python
from sklearn.cluster import DBSCAN
DBSCAN(metric='cosine')
```

#### Fixed code

```python
from sklearn.cluster import DBSCAN
DBSCAN(metric='euclidean')
```
