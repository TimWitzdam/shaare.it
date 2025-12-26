---
title: "ValueError: Invalid 'scoring' parameter for cross_val_score"
description: "Providing valid scoring names to cross_val_score and other CV utilities to avoid errors in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid scoring

```bash
$ python -c "from sklearn.model_selection import cross_val_score; from sklearn.linear_model import LogisticRegression; import numpy as np; X=np.random.rand(10,2); y=np.random.randint(0,2,10); cross_val_score(LogisticRegression(), X, y, scoring='foo_score')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Invalid scoring 'foo_score'
```

### Why this happens

- Unsupported scoring string passed.

### Fix

- Use names from `sklearn.metrics.get_scorer_names()`.

#### Wrong code

```python
cross_val_score(LogisticRegression(), X, y, scoring='foo_score')
```

#### Fixed code

```python
cross_val_score(LogisticRegression(max_iter=500), X, y, scoring='accuracy')
```
