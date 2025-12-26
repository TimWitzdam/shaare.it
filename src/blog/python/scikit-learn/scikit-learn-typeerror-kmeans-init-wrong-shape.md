---
title: "TypeError: KMeans init array has wrong shape"
description: "Correct the shape of initial cluster centers for KMeans."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: KMeans init wrong shape

```bash
$ python -c "from sklearn.cluster import KMeans; import numpy as np; KMeans(n_clusters=2, init=np.array([1,2,3])).fit([[0,0],[1,1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: init array must be of shape (n_clusters, n_features)
```

### Why this happens

Providing a 1D array or mismatched dimensions makes initial centers invalid.

### Fix

Use an array of shape `(n_clusters, n_features)`.

#### Wrong code

```python
from sklearn.cluster import KMeans
import numpy as np
KMeans(n_clusters=2, init=np.array([1,2,3]))
```

#### Fixed code

```python
from sklearn.cluster import KMeans
import numpy as np
init = np.array([[0,0],[1,1]])
KMeans(n_clusters=2, init=init)
```
