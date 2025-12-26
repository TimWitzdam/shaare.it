---
title: "ValueError: 'n_components' invalid for TruncatedSVD"
description: "scikit-learn TruncatedSVD n_components must be between 1 and min(n_features-1, n_samples)."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: TruncatedSVD n_components invalid

```bash
$ python -c "from sklearn.decomposition import TruncatedSVD; TruncatedSVD(n_components=0).fit([[0,0],[1,1],[2,2]],[0,1,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: n_components must be >= 1 and < n_features
```

### Why this happens

Dimensionality must be at least 1 and less than the number of features.

### Fix

Choose a valid n_components.

#### Wrong code

```python
from sklearn.decomposition import TruncatedSVD
TruncatedSVD(n_components=0)
```

#### Fixed code

```python
from sklearn.decomposition import TruncatedSVD
TruncatedSVD(n_components=1)
```
