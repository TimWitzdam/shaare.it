---
title: "TypeError: cross_val_score y is None"
description: "Provide target y for supervised metrics when required in cross-validation."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: y must be provided

```bash
$ python -c "from sklearn.model_selection import cross_val_score; from sklearn.linear_model import LogisticRegression; cross_val_score(LogisticRegression(), [[0],[1]], None)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: y must not be None for supervised estimators
```

### Why this happens

Supervised estimators need `y` during splitting and scoring. Passing `None` yields type errors or value errors.

### Fix

Provide the target vector `y` with matching length to `X`.

#### Wrong code

```python
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
cross_val_score(LogisticRegression(), [[0],[1]], None)
```

#### Fixed code

```python
from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression
cross_val_score(LogisticRegression(), [[0],[1]], [0,1])
```
