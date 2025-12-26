---
title: "ValueError: With n_samples < n_clusters, at least one cluster will be empty (KMeans)"
description: "Balancing number of clusters with samples to avoid empty cluster errors in KMeans."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: KMeans empty cluster

```bash
$ python -c "from sklearn.cluster import KMeans; KMeans(n_clusters=5).fit([[0,1],[1,0]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: n_samples=2 should be >= n_clusters=5.
```

### Why this happens

- More clusters than samples.

### Fix

- Reduce `n_clusters` or add data.

#### Wrong code

```python
KMeans(n_clusters=5).fit([[0,1],[1,0]])
```

#### Fixed code

```python
KMeans(n_clusters=2, random_state=42).fit([[0,1],[1,0],[0.5,0.5]])
```
