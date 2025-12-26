---
title: "ValueError: DecisionTree max_features invalid"
description: "Resolve invalid max_features settings in tree-based models."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid max_features

```bash
$ python -c "from sklearn.tree import DecisionTreeClassifier; DecisionTreeClassifier(max_features=0).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: max_features must be in (0, n_features], a float in (0.0, 1.0], or one of {'auto','sqrt','log2'}
```

### Why this happens

Passing `0`, negative, or out-of-range floats, or unsupported strings for `max_features` is invalid.

### Fix

Provide a valid setting: a positive integer, a float in `(0.0, 1.0]`, or one of the allowed strings.

#### Wrong code

```python
from sklearn.tree import DecisionTreeClassifier
clf = DecisionTreeClassifier(max_features=0)
clf.fit([[0,0],[1,1],[2,2]], [0,1,1])
```

#### Fixed code

```python
from sklearn.tree import DecisionTreeClassifier
clf = DecisionTreeClassifier(max_features='sqrt')
clf.fit([[0,0],[1,1],[2,2]], [0,1,1])
```
