---
title: "ValueError: 'min_samples_leaf' must be >= 1"
description: "scikit-learn error when min_samples_leaf is invalid and how to fix it."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: min_samples_leaf out of range

```bash
$ python -c "from sklearn.tree import DecisionTreeClassifier; DecisionTreeClassifier(min_samples_leaf=0).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: min_samples_leaf must be at least 1
```

### Why this happens

A leaf must contain at least one sample; zero leaves are invalid.

### Fix

Set min_samples_leaf >= 1 (or a float in (0,0.5] representing fraction).

#### Wrong code

```python
from sklearn.tree import DecisionTreeClassifier
clf = DecisionTreeClassifier(min_samples_leaf=0)
clf.fit([[0],[1]],[0,1])
```

#### Fixed code

```python
from sklearn.tree import DecisionTreeClassifier
clf = DecisionTreeClassifier(min_samples_leaf=1, random_state=42)
clf.fit([[0],[1],[2],[3]],[0,1,0,1])
```
