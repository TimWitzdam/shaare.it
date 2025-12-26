---
title: "ValueError: Unknown metric function"
description: "Using valid scoring/metric names in scikit-learn to avoid unknown metric errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: Unknown metric function

```bash
$ python -c "from sklearn.model_selection import cross_val_score; from sklearn.linear_model import LogisticRegression; import numpy as np; X=np.random.rand(10,2); y=np.random.randint(0,2,10); cross_val_score(LogisticRegression(), X, y, scoring='accuracyy')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Unknown metric function: accuracyy
```

### Why this happens

- Misspelled or unsupported scoring name.

### Fix

- Use a valid metric name like `accuracy`, `f1`, `roc_auc`, etc.

#### Wrong code

```python
cross_val_score(LogisticRegression(), X, y, scoring='accuracyy')
```

#### Fixed code

```python
cross_val_score(LogisticRegression(max_iter=500), X, y, scoring='accuracy')
```
