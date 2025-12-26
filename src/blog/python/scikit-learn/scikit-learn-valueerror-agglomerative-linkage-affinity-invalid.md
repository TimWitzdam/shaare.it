---
title: "ValueError: AgglomerativeClustering linkage invalid with affinity"
description: "scikit-learn AgglomerativeClustering linkage/affinity mismatch errors and fixes."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: Agglomerative linkage-affinity invalid

```bash
$ python -c "from sklearn.cluster import AgglomerativeClustering; AgglomerativeClustering(linkage='ward', affinity='l1').fit([[0],[1],[2]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: linkage='ward' only supports affinity='euclidean'
```

### Why this happens

Ward linkage requires Euclidean affinity.

### Fix

Set affinity='euclidean' with ward or change linkage.

#### Wrong code

```python
from sklearn.cluster import AgglomerativeClustering
AgglomerativeClustering(linkage='ward', affinity='l1')
```

#### Fixed code

```python
from sklearn.cluster import AgglomerativeClustering
AgglomerativeClustering(linkage='ward', affinity='euclidean')
```
