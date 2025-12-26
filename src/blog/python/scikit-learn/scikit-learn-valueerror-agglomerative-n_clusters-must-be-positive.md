---
title: "ValueError: AgglomerativeClustering n_clusters must be positive"
description: "Ensure a positive number of clusters for AgglomerativeClustering."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: n_clusters must be > 0

```bash
$ python -c "from sklearn.cluster import AgglomerativeClustering; AgglomerativeClustering(n_clusters=0).fit([[0,0],[1,1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: n_clusters must be an integer > 0
```

### Why this happens

A clustering needs at least 1 cluster.

### Fix

Set `n_clusters >= 1`.

#### Wrong code

```python
from sklearn.cluster import AgglomerativeClustering
AgglomerativeClustering(n_clusters=0)
```

#### Fixed code

```python
from sklearn.cluster import AgglomerativeClustering
AgglomerativeClustering(n_clusters=2)
```
