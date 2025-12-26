---
title: "ValueError: 'add_indicator' must be bool for SimpleImputer"
description: "scikit-learn SimpleImputer add_indicator invalid type error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: SimpleImputer add_indicator type

```bash
$ python -c "from sklearn.impute import SimpleImputer; SimpleImputer(add_indicator='yes').fit([[1],[None],[3]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: add_indicator must be a boolean
```

### Why this happens

Parameter expects a boolean.

### Fix

Set add_indicator=True/False.

#### Wrong code

```python
from sklearn.impute import SimpleImputer
SimpleImputer(add_indicator='yes')
```

#### Fixed code

```python
from sklearn.impute import SimpleImputer
SimpleImputer(add_indicator=True)
```
