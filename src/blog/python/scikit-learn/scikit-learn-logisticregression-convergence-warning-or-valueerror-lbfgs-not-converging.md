---
title: "ConvergenceWarning/ValueError: lbfgs does not converge in LogisticRegression"
description: "Troubleshooting non-convergence in LogisticRegression and solver settings."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## LogisticRegression solver convergence issues

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; import numpy as np; X=np.random.rand(50,3); y=np.random.randint(0,2,50); LogisticRegression(max_iter=10, solver='lbfgs').fit(X,y)"
/usr/lib/python... ConvergenceWarning: lbfgs failed to converge (status=1): STOP: TOTAL NO. of ITERATIONS REACHED LIMIT.
```

### Why this happens

- Too few iterations, poor scaling, or incompatible penalty/multi_class settings.

### Fix

- Increase `max_iter`, scale features, adjust `solver`, use `multi_class='auto'`.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression(max_iter=10, solver='lbfgs').fit(X, y)
```

#### Fixed code

```python
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', LogisticRegression(max_iter=1000, solver='lbfgs'))
])
pipe.fit(X, y)
```
