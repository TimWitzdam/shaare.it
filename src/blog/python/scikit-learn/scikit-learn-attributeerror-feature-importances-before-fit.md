---
title: "AttributeError: 'RandomForestClassifier' object has no attribute 'feature_importances_' before fit"
description: "Accessing attributes before fitting and how to avoid the error."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## AttributeError: feature*importances* before fit

```bash
$ python -c "from sklearn.ensemble import RandomForestClassifier; rf=RandomForestClassifier(); print(rf.feature_importances_)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'RandomForestClassifier' object has no attribute 'feature_importances_'
```

### Why this happens

- Attributes like `feature_importances_` are created during `fit`. Accessing them before `fit` raises an error.

### Fix

- Call `fit` before accessing learned attributes.

#### Wrong code

```python
from sklearn.ensemble import RandomForestClassifier
rf = RandomForestClassifier()
print(rf.feature_importances_)
```

#### Fixed code

```python
from sklearn.ensemble import RandomForestClassifier
rf = RandomForestClassifier(random_state=42)
X = [[0,1],[1,0],[0.3,0.7]]
y = [0,1,0]
rf.fit(X, y)
print(rf.feature_importances_)
```
