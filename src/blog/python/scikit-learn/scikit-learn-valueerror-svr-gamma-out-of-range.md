---
title: "ValueError: 'gamma' must be > 0 for RBF/poly/sigmoid"
description: "scikit-learn SVR/SVC gamma invalid value and how to fix it."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: gamma out of range

```bash
$ python -c "from sklearn.svm import SVC; SVC(gamma=0).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: gamma must be > 0
```

### Why this happens

Gamma controls kernel width and must be positive.

### Fix

Use 'scale', 'auto', or a positive float.

#### Wrong code

```python
from sklearn.svm import SVC
SVC(gamma=0)
```

#### Fixed code

```python
from sklearn.svm import SVC
SVC(gamma='scale')
```
