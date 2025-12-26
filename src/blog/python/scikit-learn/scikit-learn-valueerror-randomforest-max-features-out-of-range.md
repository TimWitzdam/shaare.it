---
title: "ValueError: max_features must be in (0, n_features]"
description: "Setting valid max_features for RandomForest to avoid errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: RandomForest max_features out of range

```bash
$ python -c "from sklearn.ensemble import RandomForestClassifier; RandomForestClassifier(max_features=0).fit([[0,1],[1,0]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: max_features must be in (0, n_features].
```

### Why this happens

- Invalid `max_features` value relative to number of features.

### Fix

- Choose a positive integer or valid string (`'auto'`, `'sqrt'`, `'log2'`).

#### Wrong code

```python
from sklearn.ensemble import RandomForestClassifier
RandomForestClassifier(max_features=0).fit([[0,1],[1,0]],[0,1])
```

#### Fixed code

```python
from sklearn.ensemble import RandomForestClassifier
RandomForestClassifier(max_features='sqrt').fit([[0,1],[1,0],[0.4,0.6]],[0,1,0])
```
