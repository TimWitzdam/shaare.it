---
title: "ValueError: FeatureUnion transformer output wrong type"
description: "Fix transformers that return lists instead of arrays/sparse matrices in FeatureUnion."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: transformer output wrong type

```bash
$ python -c "from sklearn.pipeline import FeatureUnion; class T:
 def fit(self, X, y=None): return self
 def transform(self, X): return ['bad']; FeatureUnion([('t', T())]).fit_transform([[0],[1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Transform output must be array-like or sparse matrix, not list of strings
```

### Why this happens

`FeatureUnion` concatenates arrays or sparse matrices. Non-numeric or non-array outputs break concatenation.

### Fix

Return numpy arrays or sparse matrices from transformers.

#### Wrong code

```python
from sklearn.pipeline import FeatureUnion
class T:
    def fit(self, X, y=None):
        return self
    def transform(self, X):
        return ['bad']
FeatureUnion([('t', T())]).fit_transform([[0],[1]])
```

#### Fixed code

```python
import numpy as np
from sklearn.pipeline import FeatureUnion
class T:
    def fit(self, X, y=None):
        return self
    def transform(self, X):
        return np.asarray(X)
FeatureUnion([('t', T())]).fit_transform([[0],[1]])
```
