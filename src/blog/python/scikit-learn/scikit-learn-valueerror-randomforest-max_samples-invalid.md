---
title: "ValueError: RandomForest 'max_samples' out of range"
description: "scikit-learn RandomForest max_samples must be int in (0, n_samples]; error and fix examples."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: RandomForest max_samples invalid

```bash
$ python -c "from sklearn.ensemble import RandomForestClassifier; RandomForestClassifier(max_samples=0).fit([[0],[1],[2],[3]],[0,1,1,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: max_samples must be > 0 and <= n_samples
```

### Why this happens

Sampling size must be positive.

### Fix

Choose a valid integer or None.

#### Wrong code

```python
from sklearn.ensemble import RandomForestClassifier
RandomForestClassifier(max_samples=0)
```

#### Fixed code

```python
from sklearn.ensemble import RandomForestClassifier
RandomForestClassifier(max_samples=2)
```
