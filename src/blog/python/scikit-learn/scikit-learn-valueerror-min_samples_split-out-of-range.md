---
title: "ValueError: 'min_samples_split' must be >= 2"
description: "scikit-learn decision tree split threshold errors and their fixes."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: min_samples_split out of range

```bash
$ python -c "from sklearn.tree import DecisionTreeClassifier; DecisionTreeClassifier(min_samples_split=1).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: min_samples_split must be at least 2
```

### Why this happens

Splits require at least two samples to be meaningful; lower values break the algorithm guarantees.

### Fix

Set min_samples_split >= 2 (or a float in (0,1] representing fraction).

#### Wrong code

```python
from sklearn.tree import DecisionTreeClassifier
clf = DecisionTreeClassifier(min_samples_split=1)
clf.fit([[0],[1]],[0,1])
```

#### Fixed code

```python
from sklearn.tree import DecisionTreeClassifier
clf = DecisionTreeClassifier(min_samples_split=2, random_state=42)
clf.fit([[0],[1],[2],[3]],[0,1,0,1])
```
