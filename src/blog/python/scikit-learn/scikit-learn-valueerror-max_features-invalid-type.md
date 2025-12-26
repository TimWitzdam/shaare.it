---
title: "ValueError: 'max_features' must be int, float, str or None"
description: "scikit-learn error when passing invalid type to max_features and how to fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: max_features invalid type

```bash
$ python -c "from sklearn.ensemble import RandomForestClassifier; RandomForestClassifier(max_features=['a']).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: max_features must be int, float, str or None
```

### Why this happens

scikit-learn validates max_features and rejects unsupported types like lists.

### Fix

Use an int count, a float fraction, a supported string ('sqrt','log2'), or None.

#### Wrong code

```python
from sklearn.ensemble import RandomForestClassifier
clf = RandomForestClassifier(max_features=['sqrt'])
clf.fit([[0],[1]],[0,1])
```

#### Fixed code

```python
from sklearn.ensemble import RandomForestClassifier
# valid options
RandomForestClassifier(max_features='sqrt')
RandomForestClassifier(max_features='log2')
RandomForestClassifier(max_features=None)
RandomForestClassifier(max_features=0.5)
```
