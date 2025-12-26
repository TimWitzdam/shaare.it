---
title: "TypeError: Estimator does not handle missing values"
description: "Use imputers or estimators that support NaNs when encountering missing data."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: missing values not handled

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; import numpy as np; LogisticRegression().fit([[np.nan],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: Estimator does not accept missing values encoded as NaN
```

### Why this happens

Many estimators require complete data.

### Fix

Use `SimpleImputer` or models that support NaN like `HistGradientBoosting`.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
import numpy as np
LogisticRegression().fit([[np.nan],[1]], [0,1])
```

#### Fixed code

```python
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.linear_model import LogisticRegression
pipe = Pipeline([('impute', SimpleImputer()), ('clf', LogisticRegression())])
pipe.fit([[0],[1]], [0,1])
```
