---
title: "ValueError: KMeans 'n_init' must be >= 1"
description: "scikit-learn KMeans n_init invalid value error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: KMeans n_init out of range

```bash
$ python -c "from sklearn.cluster import KMeans; KMeans(n_init=0).fit([[0],[1],[2]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: n_init must be >= 1
```

### Why this happens

Number of initializations can't be zero.

### Fix

Set n_init >= 1.

#### Wrong code

```python
from sklearn.cluster import KMeans
KMeans(n_init=0)
```

#### Fixed code

```python
from sklearn.cluster import KMeans
KMeans(n_init=10)
```
