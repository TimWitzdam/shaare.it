---
title: "TypeError: Pipeline step is not a transformer"
description: "Ensure Pipeline intermediate steps implement fit/transform properly."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: step not a transformer

```bash
$ python -c "from sklearn.pipeline import Pipeline; Pipeline([('bad', object()), ('clf', None)])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: All intermediate steps of Pipeline must be transformers and implement fit and transform
```

### Why this happens

Non-transformer objects in intermediate steps break the pipeline interface.

### Fix

Use valid transformers for all steps except the final estimator.

#### Wrong code

```python
from sklearn.pipeline import Pipeline
pipe = Pipeline([('bad', object()), ('clf', None)])
```

#### Fixed code

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
pipe = Pipeline([('scaler', StandardScaler()), ('clf', None)])
```
