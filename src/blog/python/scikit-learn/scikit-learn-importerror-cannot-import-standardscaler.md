---
title: "ImportError: cannot import name 'StandardScaler' from sklearn.preprocessing"
description: "Fixing StandardScaler import failures in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ImportError: cannot import name 'StandardScaler'

```bash
$ python -c "from sklearn.preprocessing import StandardScaler"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'StandardScaler' from 'sklearn.preprocessing'
```

### Why this happens

- Old version of scikit-learn lacking the class or broken install.
- Local shadowing by `sklearn.py`/`sklearn` directory.

### Fix

- Upgrade or reinstall scikit-learn.
- Remove shadowing modules.

#### Wrong code

```python
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler
scaler.fit([[0,1],[1,0]]) # TypeError later
```

#### Fixed code

```python
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
X = [[0,1],[1,0]]
X_scaled = scaler.fit_transform(X)
print(X_scaled[:1])
```
