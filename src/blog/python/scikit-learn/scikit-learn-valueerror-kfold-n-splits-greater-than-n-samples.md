---
title: "ValueError: Cannot have number of splits n_splits greater than the number of samples (KFold)"
description: "Setting KFold n_splits consistent with dataset size to avoid errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: KFold n_splits > n_samples

```bash
$ python -c "from sklearn.model_selection import KFold; list(KFold(n_splits=5).split([[0],[1],[2]], [0,1,0]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Cannot have number of splits n_splits=5 greater than the number of samples: 3.
```

### Why this happens

- Requested splits exceed samples.

### Fix

- Reduce `n_splits`.

#### Wrong code

```python
list(KFold(n_splits=5).split(X, y))
```

#### Fixed code

```python
list(KFold(n_splits=3).split(X, y))
```
