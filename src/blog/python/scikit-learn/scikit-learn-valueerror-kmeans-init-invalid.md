---
title: "ValueError: KMeans 'init' must be 'k-means++' or 'random'"
description: "scikit-learn KMeans init invalid value error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: KMeans init invalid

```bash
$ python -c "from sklearn.cluster import KMeans; KMeans(init='centroid').fit([[0],[1],[2]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: init must be 'k-means++' or 'random' or an ndarray
```

### Why this happens

Unsupported init string.

### Fix

Use a supported value.

#### Wrong code

```python
from sklearn.cluster import KMeans
KMeans(init='centroid')
```

#### Fixed code

```python
from sklearn.cluster import KMeans
KMeans(init='k-means++')
```
