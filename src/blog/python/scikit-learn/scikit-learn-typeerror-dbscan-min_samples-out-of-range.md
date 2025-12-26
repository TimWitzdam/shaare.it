---
title: "TypeError: DBSCAN min_samples out of range"
description: "Ensure min_samples is a positive integer for DBSCAN clustering."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: min_samples out of range

```bash
$ python -c "from sklearn.cluster import DBSCAN; DBSCAN(min_samples=0).fit([[0,0],[1,1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: min_samples must be an integer >= 1
```

### Why this happens

Setting `min_samples` to 0 or negative is invalid.

### Fix

Use at least 1; common values are 3–10 depending on data density.

#### Wrong code

```python
from sklearn.cluster import DBSCAN
DBSCAN(min_samples=0)
```

#### Fixed code

```python
from sklearn.cluster import DBSCAN
DBSCAN(min_samples=5)
```
