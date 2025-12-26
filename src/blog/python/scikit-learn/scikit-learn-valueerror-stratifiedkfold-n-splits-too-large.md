---
title: "ValueError: n_splits cannot be greater than members in each class (StratifiedKFold)"
description: "Setting valid n_splits for stratified cross-validation to avoid errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: StratifiedKFold n_splits too large

```bash
$ python -c "from sklearn.model_selection import StratifiedKFold; list(StratifiedKFold(n_splits=5).split([[0],[1],[2]], [0,0,1]))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: n_splits=5 cannot be greater than the number of members in each class.
```

### Why this happens

- Not enough samples per class for the requested `n_splits`.

### Fix

- Decrease `n_splits` or gather more data.

#### Wrong code

```python
from sklearn.model_selection import StratifiedKFold
list(StratifiedKFold(n_splits=5).split([[0],[1],[2]], [0,0,1]))
```

#### Fixed code

```python
from sklearn.model_selection import StratifiedKFold
list(StratifiedKFold(n_splits=2).split([[0],[1],[2],[3],[4]], [0,0,1,1,1]))
```
