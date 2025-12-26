---
title: "ValueError: AgglomerativeClustering linkage invalid"
description: "Choose 'ward', 'complete', 'average', or 'single' for linkage (with constraints)."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid linkage

```bash
$ python -c "from sklearn.cluster import AgglomerativeClustering; AgglomerativeClustering(linkage='invalid').fit([[0,0],[1,1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: linkage must be one of {'ward','complete','average','single'}
```

### Why this happens

Unsupported linkage name or incompatible affinity with `'ward'`.

### Fix

Use valid linkage and compatible affinity (Euclidean for `ward`).

#### Wrong code

```python
from sklearn.cluster import AgglomerativeClustering
AgglomerativeClustering(linkage='invalid')
```

#### Fixed code

```python
from sklearn.cluster import AgglomerativeClustering
AgglomerativeClustering(linkage='average')
```
