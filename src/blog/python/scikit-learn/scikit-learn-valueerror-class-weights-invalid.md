---
title: "ValueError: class_weight contains invalid keys or values"
description: "Fix invalid class_weight usage in scikit-learn classifiers."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid class_weight

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression(class_weight={'foo': 1}).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: class_weight must be a dict mapping labels to floats or 'balanced'
```

### Why this happens

`class_weight` must be either `'balanced'` or a dictionary mapping known class labels to positive weights. Using unknown keys, negative weights, or non-numeric values triggers this error.

### Fix

Ensure the dictionary keys match actual labels in `y` and provide positive numeric weights, or use `'balanced'`.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression(class_weight={'foo': 2, 'bar': 0})
clf.fit([[0],[1],[2]], [0,1,1])
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression(class_weight={0: 1.0, 1: 2.0})  # or class_weight='balanced'
clf.fit([[0],[1],[2]], [0,1,1])
```
