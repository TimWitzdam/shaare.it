---
title: "ValueError: cross_val_score stratified split invalid"
description: "Fix invalid stratified splits due to class imbalance or small folds."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: stratified split invalid

```bash
$ python -c "from sklearn.model_selection import cross_val_score, StratifiedKFold; from sklearn.linear_model import LogisticRegression; cross_val_score(LogisticRegression(), [[0],[1],[2]], [0,0,1], cv=StratifiedKFold(n_splits=3))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: The least populated class in y has only 1 members, which is too few. The minimum number of members in any class cannot be less than n_splits
```

### Why this happens

Stratified folds require each class to appear at least `n_splits` times. Rare classes break fold construction.

### Fix

Reduce `n_splits`, use `KFold`, or collect more data per class.

#### Wrong code

```python
from sklearn.model_selection import cross_val_score, StratifiedKFold
from sklearn.linear_model import LogisticRegression
cross_val_score(LogisticRegression(), [[0],[1],[2]], [0,0,1], cv=StratifiedKFold(n_splits=3))
```

#### Fixed code

```python
from sklearn.model_selection import cross_val_score, StratifiedKFold
from sklearn.linear_model import LogisticRegression
cross_val_score(LogisticRegression(), [[0],[1],[2]], [0,0,1], cv=StratifiedKFold(n_splits=2))
```
