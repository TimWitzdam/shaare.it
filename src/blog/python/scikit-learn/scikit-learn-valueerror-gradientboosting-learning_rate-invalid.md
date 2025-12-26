---
title: "ValueError: GradientBoosting 'learning_rate' out of range"
description: "scikit-learn GradientBoosting learning_rate must be > 0; error and fix examples."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: GradientBoosting learning_rate invalid

```bash
$ python -c "from sklearn.ensemble import GradientBoostingClassifier; GradientBoostingClassifier(learning_rate=0).fit([[0],[1],[2],[3]],[0,1,1,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: learning_rate must be > 0
```

### Why this happens

Learning rate cannot be zero.

### Fix

Use a small positive float.

#### Wrong code

```python
from sklearn.ensemble import GradientBoostingClassifier
GradientBoostingClassifier(learning_rate=0)
```

#### Fixed code

```python
from sklearn.ensemble import GradientBoostingClassifier
GradientBoostingClassifier(learning_rate=0.1)
```
