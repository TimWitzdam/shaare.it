---
title: "ValueError: MutualInfoRegressor 'discrete_features' invalid"
description: "scikit-learn mutual information regressor discrete_features must be bool or array-like; error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: MutualInfoRegressor discrete_features invalid

```bash
$ python -c "from sklearn.feature_selection import mutual_info_regression; import numpy as np; mutual_info_regression(np.ones((5,2)), [0,1,0,1,0], discrete_features='yes')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: discrete_features must be bool or array-like of bools
```

### Why this happens

Wrong type for discrete_features.

### Fix

Provide a boolean or array of booleans.

#### Wrong code

```python
from sklearn.feature_selection import mutual_info_regression
mutual_info_regression([[1,2],[3,4]],[0,1], discrete_features='yes')
```

#### Fixed code

```python
from sklearn.feature_selection import mutual_info_regression
mutual_info_regression([[1,2],[3,4]],[0,1], discrete_features=False)
```
