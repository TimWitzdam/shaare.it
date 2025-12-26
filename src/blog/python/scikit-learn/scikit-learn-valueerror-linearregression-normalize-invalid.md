---
title: "ValueError: LinearRegression 'normalize' invalid or deprecated"
description: "scikit-learn LinearRegression normalize parameter removed; using Pipeline with StandardScaler instead."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: LinearRegression normalize invalid

```bash
$ python -c "from sklearn.linear_model import LinearRegression; LinearRegression(normalize=True).fit([[1],[2]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: 'normalize' is deprecated; use Pipeline(StandardScaler())
```

### Why this happens

The parameter has been removed.

### Fix

Use a preprocessing step.

#### Wrong code

```python
from sklearn.linear_model import LinearRegression
LinearRegression(normalize=True)
```

#### Fixed code

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
pipe = Pipeline([
  ('scale', StandardScaler()),
  ('lr', LinearRegression())
])
```
