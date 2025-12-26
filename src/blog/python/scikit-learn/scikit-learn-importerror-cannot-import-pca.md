---
title: "ImportError: cannot import name 'PCA' from sklearn.decomposition"
description: "PCA import failures and fixes in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ImportError: cannot import name 'PCA'

```bash
$ python -c "from sklearn.decomposition import PCA"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'PCA' from 'sklearn.decomposition'
```

### Why this happens

- Old or corrupted scikit-learn, or shadowed module.

### Fix

- Upgrade scikit-learn. Ensure no local `sklearn.py`.

#### Wrong code

```python
from sklearn.decomposition import PCA
pca = PCA
pca.fit([[0,1],[1,0]])
```

#### Fixed code

```python
from sklearn.decomposition import PCA
pca = PCA(n_components=1, random_state=42)
X = [[0,1],[1,0],[0.5,0.5]]
print(pca.fit_transform(X))
```
