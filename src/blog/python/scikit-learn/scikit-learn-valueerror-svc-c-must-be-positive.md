---
title: "ValueError: SVC C must be positive"
description: "Use positive regularization parameter C for SVC/SVR models."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: SVC C must be > 0

```bash
$ python -c "from sklearn.svm import SVC; SVC(C=0).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: C must be > 0
```

### Why this happens

Regularization parameter `C` cannot be non-positive.

### Fix

Use a positive value, e.g., `C=1.0`.

#### Wrong code

```python
from sklearn.svm import SVC
SVC(C=0)
```

#### Fixed code

```python
from sklearn.svm import SVC
SVC(C=1.0)
```
