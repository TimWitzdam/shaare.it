---
title: "ValueError: SelectKBest k must be positive"
description: "Choose a positive integer k for SelectKBest feature selection and <= n_features."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: SelectKBest k invalid

```bash
$ python -c "from sklearn.feature_selection import SelectKBest, f_classif; SelectKBest(f_classif, k=0).fit([[0,1],[1,0]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: k must be an integer >= 1 and <= n_features
```

### Why this happens

Setting `k` to 0, negative, or larger than the number of features is invalid.

### Fix

Pick `1 <= k <= n_features`.

#### Wrong code

```python
from sklearn.feature_selection import SelectKBest, f_classif
SelectKBest(f_classif, k=0)
```

#### Fixed code

```python
from sklearn.feature_selection import SelectKBest, f_classif
SelectKBest(f_classif, k=1)
```
