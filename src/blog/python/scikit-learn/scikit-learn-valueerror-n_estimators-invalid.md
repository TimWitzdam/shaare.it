---
title: "ValueError: 'n_estimators' must be an integer > 0"
description: "scikit-learn error when n_estimators is invalid and how to fix across ensembles."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: n_estimators invalid

```bash
$ python -c "from sklearn.ensemble import RandomForestClassifier; RandomForestClassifier(n_estimators=0).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: n_estimators must be an integer > 0
```

### Why this happens

The number of base estimators must be positive; zero or negative can't build an ensemble.

### Fix

Set n_estimators to a positive integer.

#### Wrong code

```python
from sklearn.ensemble import RandomForestClassifier
clf = RandomForestClassifier(n_estimators=0)
clf.fit([[0],[1]],[0,1])
```

#### Fixed code

```python
from sklearn.ensemble import RandomForestClassifier
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit([[0],[1]],[0,1])
```
