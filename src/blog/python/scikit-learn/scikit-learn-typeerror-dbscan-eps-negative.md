---
title: "TypeError: DBSCAN eps must be non-negative"
description: "Set a non-negative eps for DBSCAN clustering and tune min_samples properly."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: eps must be non-negative

```bash
$ python -c "from sklearn.cluster import DBSCAN; DBSCAN(eps=-1).fit([[0,0],[1,1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: eps must be >= 0
```

### Why this happens

Neighborhood radius cannot be negative.

### Fix

Use a positive value, e.g., `eps=0.5`.

#### Wrong code

```python
from sklearn.cluster import DBSCAN
DBSCAN(eps=-1)
```

#### Fixed code

```python
from sklearn.cluster import DBSCAN
DBSCAN(eps=0.5)
```
