---
title: "ImportError: cannot import name 'RandomForestClassifier' from sklearn.ensemble"
description: "RandomForestClassifier import errors in scikit-learn and fixes."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ImportError: cannot import name 'RandomForestClassifier'

```bash
$ python -c "from sklearn.ensemble import RandomForestClassifier"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'RandomForestClassifier' from 'sklearn.ensemble'
```

### Why this happens

- scikit-learn not installed or version mismatch.
- Shadowed by local `sklearn` files.

### Fix

- Install/upgrade scikit-learn and remove shadows.

#### Wrong code

```python
from sklearn.ensemble import RandomForestClassifier
rf = RandomForestClassifier
rf.fit([[0,1],[1,0]], [0,1])
```

#### Fixed code

```python
from sklearn.ensemble import RandomForestClassifier
rf = RandomForestClassifier(n_estimators=100, random_state=42)
X = [[0,1],[1,0],[0.3,0.7]]
y = [0,1,0]
rf.fit(X, y)
print(rf.predict([[0.25,0.75]]))
```
