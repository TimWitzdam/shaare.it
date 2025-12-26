---
title: "ImportError: cannot import name 'OneHotEncoder' from sklearn.preprocessing"
description: "Resolving OneHotEncoder import errors in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ImportError: cannot import name 'OneHotEncoder'

```bash
$ python -c "from sklearn.preprocessing import OneHotEncoder"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'OneHotEncoder' from 'sklearn.preprocessing'
```

### Why this happens

- Outdated install, broken wheel, or shadowed module.

### Fix

- Upgrade scikit-learn and ensure the environment is clean.

#### Wrong code

```python
from sklearn.preprocessing import OneHotEncoder
enc = OneHotEncoder
enc.fit([['a'],['b']])
```

#### Fixed code

```python
from sklearn.preprocessing import OneHotEncoder
enc = OneHotEncoder(handle_unknown="ignore")
X = [["a"],["b"],["a"]]
print(enc.fit_transform(X).toarray())
```
