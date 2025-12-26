---
title: "ValueError: 'class_weight' must be dict, 'balanced', or None"
description: "scikit-learn invalid class_weight type errors explained and fixed."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid class_weight type

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression(class_weight=1).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: class_weight must be dict, 'balanced', or None
```

### Why this happens

You passed a numeric or unsupported type where scikit-learn expects a dict mapping classes to weights, the string 'balanced', or None.

### Fix

Use a valid class_weight.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression(class_weight=2)
clf.fit([[0],[1]],[0,1])
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
# balanced automatically scales inversely to class frequencies
clf = LogisticRegression(class_weight='balanced')
clf.fit([[0],[1]],[0,1])

# or explicit dict
clf = LogisticRegression(class_weight={0: 1.0, 1: 3.0})
clf.fit([[0],[1],[2],[3]],[0,1,1,1])
```
