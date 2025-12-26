---
title: "ValueError: n_clusters must be a positive integer (KMeans)"
description: "Choosing valid n_clusters for KMeans to avoid errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: KMeans n_clusters must be positive

```bash
$ python -c "from sklearn.cluster import KMeans; KMeans(n_clusters=0).fit([[0,1],[1,0]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: n_clusters must be a positive integer.
```

### Why this happens

- Invalid parameter value for `n_clusters`.

### Fix

- Set `n_clusters >= 1`.

#### Wrong code

```python
from sklearn.cluster import KMeans
KMeans(n_clusters=0).fit([[0,1],[1,0]])
```

#### Fixed code

```python
from sklearn.cluster import KMeans
KMeans(n_clusters=2, random_state=42).fit([[0,1],[1,0],[0.5,0.5]])
```
