---
title: "TypeError: check_is_fitted wrong attribute names"
description: "Use correct fitted attribute names when validating custom estimators."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: wrong fitted attributes

```bash
$ python -c "from sklearn.utils.validation import check_is_fitted; class M: pass; check_is_fitted(M(), attributes='coef_')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: attributes must be a list/tuple of strings or None
```

### Why this happens

Providing a single string instead of a sequence, or invalid attribute names, breaks `check_is_fitted`.

### Fix

Pass a list/tuple of attribute names or leave `attributes=None`.

#### Wrong code

```python
from sklearn.utils.validation import check_is_fitted
class MyEst:
    pass
check_is_fitted(MyEst(), attributes='coef_')
```

#### Fixed code

```python
from sklearn.utils.validation import check_is_fitted
class MyEst:
    coef_ = [1]
check_is_fitted(MyEst(), attributes=["coef_"])  # or attributes=None
```
