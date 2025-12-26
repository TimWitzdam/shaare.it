---
title: "ValueError: pipeline named_steps KeyError"
description: "Avoid KeyError when referencing missing steps in Pipeline.named_steps."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: named_steps KeyError

```bash
$ python -c "from sklearn.pipeline import Pipeline; p=Pipeline([('scale', None)]); p.named_steps['scaler']"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
KeyError: 'scaler'
```

### Why this happens

Accessing a non-existent key in `named_steps` raises `KeyError`. Typos or different step names are common causes.

### Fix

Use the exact step name or iterate `named_steps.keys()` to confirm available names.

#### Wrong code

```python
from sklearn.pipeline import Pipeline
pipe = Pipeline([('scaler', None), ('clf', None)])
pipe.named_steps['scale']  # typo
```

#### Fixed code

```python
from sklearn.pipeline import Pipeline
pipe = Pipeline([('scaler', None), ('clf', None)])
pipe.named_steps['scaler']  # correct key
```
