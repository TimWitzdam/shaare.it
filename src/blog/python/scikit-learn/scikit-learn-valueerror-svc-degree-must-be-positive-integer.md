---
title: "ValueError: SVC degree must be a positive integer"
description: "Common causes of invalid degree in polynomial kernel for SVC/SVR."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: degree must be positive integer

```bash
$ python -c "from sklearn.svm import SVC; SVC(kernel='poly', degree=0).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: degree must be a positive integer
```

### Why this happens

For the polynomial kernel (`kernel='poly'`), `degree` controls the polynomial order. Zero, negative, or non-integer values are invalid.

### Fix

Set `degree` to a positive integer such as 2 or 3.

#### Wrong code

```python
from sklearn.svm import SVC
clf = SVC(kernel='poly', degree=-2)
clf.fit([[0],[1]], [0,1])
```

#### Fixed code

```python
from sklearn.svm import SVC
clf = SVC(kernel='poly', degree=3)
clf.fit([[0],[1]], [0,1])
```
