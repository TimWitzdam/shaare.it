---
title: "ValueError: 'C' must be positive for SVC/SVR"
description: "scikit-learn SVM regularization parameter C must be positive; error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: C must be positive

```bash
$ python -c "from sklearn.svm import SVC; SVC(C=0).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: C must be > 0
```

### Why this happens

Regularization strength must be positive.

### Fix

Set C to a positive float.

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
