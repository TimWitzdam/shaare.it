---
title: "ValueError: 'strategy' invalid for SimpleImputer"
description: "scikit-learn SimpleImputer strategy must be 'mean','median','most_frequent','constant'; error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: SimpleImputer strategy invalid

```bash
$ python -c "from sklearn.impute import SimpleImputer; SimpleImputer(strategy='mode').fit([[1],[None],[3]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: strategy must be 'mean','median','most_frequent','constant'
```

### Why this happens

Unsupported strategy string.

### Fix

Pick a valid strategy.

#### Wrong code

```python
from sklearn.impute import SimpleImputer
SimpleImputer(strategy='mode')
```

#### Fixed code

```python
from sklearn.impute import SimpleImputer
SimpleImputer(strategy='median')
```
