---
title: "ValueError: DecisionTree max_depth must be > 0"
description: "Fix invalid max_depth for DecisionTreeClassifier/Regressor."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: max_depth must be positive

```bash
$ python -c "from sklearn.tree import DecisionTreeClassifier as DTC; DTC(max_depth=0).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: max_depth must be > 0
```

### Why this happens

Setting `max_depth=0` or negative limits creates an invalid tree configuration.

### Fix

Use `None` for unlimited depth or a positive integer.

#### Wrong code

```python
from sklearn.tree import DecisionTreeClassifier
clf = DecisionTreeClassifier(max_depth=-3)
clf.fit([[0],[1],[2]], [0,1,1])
```

#### Fixed code

```python
from sklearn.tree import DecisionTreeClassifier
clf = DecisionTreeClassifier(max_depth=3)  # or max_depth=None
clf.fit([[0],[1],[2]], [0,1,1])
```
