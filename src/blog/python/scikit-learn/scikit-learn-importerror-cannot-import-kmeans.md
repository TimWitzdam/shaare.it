---
title: "ImportError: cannot import name 'KMeans' from sklearn.cluster"
description: "KMeans import errors in scikit-learn and how to fix them."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ImportError: cannot import name 'KMeans'

```bash
$ python -c "from sklearn.cluster import KMeans"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'KMeans' from 'sklearn.cluster'
```

### Why this happens

- Outdated scikit-learn or shadowed module.

### Fix

- Upgrade scikit-learn and remove shadowing.

#### Wrong code

```python
from sklearn.cluster import KMeans
km = KMeans
km.fit([[0,1],[1,0]])
```

#### Fixed code

```python
from sklearn.cluster import KMeans
km = KMeans(n_clusters=2, random_state=42)
X = [[0,1],[1,0],[0.4,0.6]]
print(km.fit_predict(X))
```
