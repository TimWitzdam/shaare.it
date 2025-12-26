---
title: "ValueError: 'kernel' invalid for SVR"
description: "scikit-learn SVR unknown kernel errors and how to fix them."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: SVR kernel invalid

```bash
$ python -c "from sklearn.svm import SVR; SVR(kernel='rbf2').fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Unknown kernel 'rbf2'
```

### Why this happens

You passed an unsupported kernel name.

### Fix

Use 'linear', 'poly', 'rbf', 'sigmoid', 'precomputed'.

#### Wrong code

```python
from sklearn.svm import SVR
SVR(kernel='rbf2')
```

#### Fixed code

```python
from sklearn.svm import SVR
SVR(kernel='rbf', gamma='scale')
```
