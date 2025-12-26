---
title: "ValueError: Pipeline duplicate step names"
description: "Ensure unique names for Pipeline steps to avoid conflicts and overwriting."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: duplicate step names in Pipeline

```bash
$ python -c "from sklearn.pipeline import Pipeline; from sklearn.preprocessing import StandardScaler; Pipeline([('scaler', StandardScaler()), ('scaler', StandardScaler())])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Step names must be unique
```

### Why this happens

Pipelines use step names as keys. Duplicates overwrite or raise errors.

### Fix

Give distinct names to each step.

#### Wrong code

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
Pipeline([('scaler', StandardScaler()), ('scaler', StandardScaler())])
```

#### Fixed code

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
Pipeline([('scaler', StandardScaler()), ('scaler2', StandardScaler())])
```
