---
title: "ValueError: make_pipeline invalid step name"
description: "Avoid invalid attribute names in Pipeline steps created by make_pipeline."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid step name in make_pipeline

```bash
$ python -c "from sklearn.pipeline import make_pipeline; class Bad: pass; make_pipeline(Bad())"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Estimator name must be a valid Python identifier
```

### Why this happens

Steps are auto-named from class names. Non-identifier names or improper objects cause errors.

### Fix

Provide proper estimators or manually set names with `Pipeline([(name, est), ...])`.

#### Wrong code

```python
from sklearn.pipeline import make_pipeline
class Bad:
    pass
make_pipeline(Bad())
```

#### Fixed code

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
Pipeline([('scaler', StandardScaler())])
```
