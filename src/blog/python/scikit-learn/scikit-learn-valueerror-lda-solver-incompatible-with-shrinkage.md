---
title: "ValueError: LDA solver incompatible with shrinkage"
description: "Use 'lsqr' or 'eigen' solvers when shrinkage is not None for LDA."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: LDA shrinkage solver mismatch

```bash
$ python -c "from sklearn.discriminant_analysis import LinearDiscriminantAnalysis as LDA; LDA(solver='svd', shrinkage='auto').fit([[0,0],[1,1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: shrinkage is not supported with solver 'svd'
```

### Why this happens

`shrinkage` requires `solver='lsqr'` or `'eigen'`.

### Fix

Switch to a compatible solver when using shrinkage.

#### Wrong code

```python
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis as LDA
LDA(solver='svd', shrinkage='auto')
```

#### Fixed code

```python
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis as LDA
LDA(solver='lsqr', shrinkage='auto')
```
