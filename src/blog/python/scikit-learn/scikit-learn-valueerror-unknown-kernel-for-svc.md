---
title: "ValueError: Unknown kernel 'foo' for SVC"
description: "Using valid kernel names with SVC to avoid unknown kernel errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: Unknown SVC kernel

```bash
$ python -c "from sklearn.svm import SVC; SVC(kernel='foo').fit([[0,1],[1,0]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: kernel should be one of 'linear', 'poly', 'rbf', 'sigmoid'
```

### Why this happens

- Invalid kernel name.

### Fix

- Choose from supported kernels.

#### Wrong code

```python
from sklearn.svm import SVC
SVC(kernel='foo').fit(X, y)
```

#### Fixed code

```python
from sklearn.svm import SVC
SVC(kernel='rbf').fit(X, y)
```
