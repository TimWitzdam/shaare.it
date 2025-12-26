---
title: "TypeError: LinearDiscriminantAnalysis n_components out of range"
description: "Pick n_components <= min(n_classes-1, n_features) for LDA."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: LDA n_components out of range

```bash
$ python -c "from sklearn.discriminant_analysis import LinearDiscriminantAnalysis as LDA; LDA(n_components=5).fit([[0,0],[1,1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: n_components must be <= min(n_classes - 1, n_features)
```

### Why this happens

LDA dimensionality reduction bound depends on classes and features.

### Fix

Set `n_components` to a valid bound.

#### Wrong code

```python
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis as LDA
LDA(n_components=5)
```

#### Fixed code

```python
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis as LDA
LDA(n_components=1)
```
