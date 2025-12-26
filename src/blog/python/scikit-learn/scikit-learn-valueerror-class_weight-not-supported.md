---
title: "ValueError: 'class_weight' not supported for estimator"
description: "scikit-learn error when passing class_weight to estimators that don't support it; how to fix or alternative approaches."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: class_weight not supported

```bash
$ python -c "from sklearn.naive_bayes import GaussianNB; GaussianNB(class_weight='balanced')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: class_weight is not supported by GaussianNB
```

### Why this happens

Estimator does not implement class weighting.

### Fix

Use sample_weight during fit or choose a supporting estimator.

#### Wrong code

```python
from sklearn.naive_bayes import GaussianNB
GaussianNB(class_weight='balanced')
```

#### Fixed code

```python
from sklearn.naive_bayes import GaussianNB
import numpy as np
X = [[0],[1],[2],[3]]
y = [0,1,1,1]
sample_weight = np.array([1.0, 3.0, 3.0, 3.0])
GaussianNB().fit(X,y, sample_weight=sample_weight)
```
