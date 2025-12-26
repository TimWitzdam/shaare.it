---
title: "ValueError: mutual_info_classif discrete_features invalid"
description: "Use correct boolean/array types for discrete_features in mutual_info functions."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: discrete_features invalid type

```bash
$ python -c "from sklearn.feature_selection import mutual_info_classif; import numpy as np; mutual_info_classif([[0,1],[1,0]], [0,1], discrete_features='yes')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: discrete_features must be bool or array-like of booleans of shape (n_features,)
```

### Why this happens

Passing strings or wrong-shaped arrays causes validation errors.

### Fix

Use `True/False` or a boolean array per feature.

#### Wrong code

```python
from sklearn.feature_selection import mutual_info_classif
mutual_info_classif([[0,1],[1,0]], [0,1], discrete_features='yes')
```

#### Fixed code

```python
from sklearn.feature_selection import mutual_info_classif
import numpy as np
mutual_info_classif([[0,1],[1,0]], [0,1], discrete_features=np.array([True, False]))
```
