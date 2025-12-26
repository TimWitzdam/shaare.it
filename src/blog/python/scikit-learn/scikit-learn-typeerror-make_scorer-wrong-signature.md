---
title: "TypeError: make_scorer callable has wrong signature"
description: "Ensure custom scorers accept (y_true, y_pred) or use scorer APIs correctly."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: wrong scorer signature

```bash
$ python -c "from sklearn.metrics import make_scorer; def bad(): return 0; make_scorer(bad)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: Scorer callable must accept (y_true, y_pred) or be a valid scorer function
```

### Why this happens

Custom scorers must follow expected signatures. Functions without required parameters or returning non-numeric scores cause type errors.

### Fix

Write a callable `func(y_true, y_pred)` and wrap it with `make_scorer` (optionally `greater_is_better`).

#### Wrong code

```python
def bad():
    return "score"
from sklearn.metrics import make_scorer
sc = make_scorer(bad)
```

#### Fixed code

```python
from sklearn.metrics import make_scorer

def my_score(y_true, y_pred):
    return (y_true == y_pred).mean()

sc = make_scorer(my_score, greater_is_better=True)
```
