---
title: "ValueError: SelectKBest 'k' larger than number of features"
description: "scikit-learn SelectKBest k must be <= n_features; error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: SelectKBest k too large

```bash
$ python -c "from sklearn.feature_selection import SelectKBest; import numpy as np; X=np.ones((5,3)); y=[0,1,0,1,0]; SelectKBest(k=5).fit(X,y)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: k must be <= number of features
```

### Why this happens

You requested more features than available.

### Fix

Set k <= n_features.

#### Wrong code

```python
from sklearn.feature_selection import SelectKBest
SelectKBest(k=10)
```

#### Fixed code

```python
from sklearn.feature_selection import SelectKBest
SelectKBest(k=2)
```
