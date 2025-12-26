---
title: "ValueError: 'degree' must be >= 1 for polynomial kernel"
description: "scikit-learn SVR degree invalid value error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: SVR degree out of range

```bash
$ python -c "from sklearn.svm import SVR; SVR(kernel='poly', degree=0).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: degree must be >= 1 for polynomial kernel
```

### Why this happens

Polynomial kernel requires degree >= 1.

### Fix

Set degree to a positive integer.

#### Wrong code

```python
from sklearn.svm import SVR
SVR(kernel='poly', degree=0)
```

#### Fixed code

```python
from sklearn.svm import SVR
SVR(kernel='poly', degree=3)
```
