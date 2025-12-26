---
title: "ValueError: Input X contains NaN"
description: "Handling missing values in scikit-learn pipelines to avoid NaN errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: Input X contains NaN

```bash
$ python -c "import numpy as np; from sklearn.linear_model import LogisticRegression; X=np.array([[0,1],[np.nan,0]]); LogisticRegression().fit(X,[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Input X contains NaN.
```

### Why this happens

- Estimator does not support NaN values.

### Fix

- Impute missing values or drop rows/columns.

#### Wrong code

```python
import numpy as np
from sklearn.linear_model import LogisticRegression
X = np.array([[0,1],[np.nan,0]])
LogisticRegression().fit(X,[0,1])
```

#### Fixed code

```python
import numpy as np
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
X = np.array([[0,1],[np.nan,0]])
X = SimpleImputer(strategy="mean").fit_transform(X)
print(LogisticRegression(max_iter=500).fit(X,[0,1]).predict([[0,0]]))
```
