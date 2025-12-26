---
title: "ValueError: GradientBoosting 'subsample' out of range"
description: "scikit-learn GradientBoosting subsample must be in (0,1]; error and fix examples."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: GradientBoosting subsample invalid

```bash
$ python -c "from sklearn.ensemble import GradientBoostingClassifier; GradientBoostingClassifier(subsample=0).fit([[0],[1],[2],[3]],[0,1,1,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: subsample must be in (0, 1]
```

### Why this happens

Subsample fraction cannot be zero.

### Fix

Use a value in (0,1].

#### Wrong code

```python
from sklearn.ensemble import GradientBoostingClassifier
GradientBoostingClassifier(subsample=0)
```

#### Fixed code

```python
from sklearn.ensemble import GradientBoostingClassifier
GradientBoostingClassifier(subsample=0.8)
```
