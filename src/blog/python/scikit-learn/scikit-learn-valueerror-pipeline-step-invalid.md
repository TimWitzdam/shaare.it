---
title: "ValueError: Pipeline step must implement fit and transform"
description: "scikit-learn Pipeline requires each transformer to implement fit/transform; error and fix examples."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: Pipeline step invalid

```bash
$ python -c "from sklearn.pipeline import Pipeline; pipe=Pipeline([('bad', object())]); pipe.fit([[1],[2]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: All steps should be transformers and implement fit/transform
```

### Why this happens

A step does not follow the estimator API.

### Fix

Use valid estimators or wrap functions with FunctionTransformer.

#### Wrong code

```python
from sklearn.pipeline import Pipeline
pipe = Pipeline([
  ('bad', object())
])
pipe.fit([[1],[2]],[0,1])
```

#### Fixed code

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
pipe = Pipeline([
  ('scale', StandardScaler()),
  ('clf', LogisticRegression())
])
pipe.fit([[1],[2]],[0,1])
```
