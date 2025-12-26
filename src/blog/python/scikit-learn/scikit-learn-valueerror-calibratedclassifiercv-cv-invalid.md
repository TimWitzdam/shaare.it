---
title: "ValueError: CalibratedClassifierCV cv invalid"
description: "Provide a valid integer or CV splitter with suitable folds to CalibratedClassifierCV."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid cv for CalibratedClassifierCV

```bash
$ python -c "from sklearn.calibration import CalibratedClassifierCV; from sklearn.svm import LinearSVC; CalibratedClassifierCV(LinearSVC(), cv=0).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: cv must be an integer >= 2 or a valid CV splitter
```

### Why this happens

Calibration requires cross-validation with at least 2 folds.

### Fix

Use `cv>=2` or a proper splitter.

#### Wrong code

```python
from sklearn.calibration import CalibratedClassifierCV
from sklearn.svm import LinearSVC
CalibratedClassifierCV(LinearSVC(), cv=0)
```

#### Fixed code

```python
from sklearn.calibration import CalibratedClassifierCV
from sklearn.svm import LinearSVC
CalibratedClassifierCV(LinearSVC(), cv=3)
```
