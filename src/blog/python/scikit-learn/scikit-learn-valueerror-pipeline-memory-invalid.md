---
title: "ValueError: Pipeline 'memory' must be joblib.Memory or None"
description: "scikit-learn Pipeline memory caching requires joblib.Memory; error and fix examples."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: Pipeline memory invalid

```bash
$ python -c "from sklearn.pipeline import Pipeline; Pipeline(steps=[], memory=123)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: memory must be joblib.Memory or None
```

### Why this happens

Wrong type for memory.

### Fix

Use joblib.Memory or None.

#### Wrong code

```python
from sklearn.pipeline import Pipeline
Pipeline(steps=[], memory=123)
```

#### Fixed code

```python
from sklearn.pipeline import Pipeline
from joblib import Memory
mem = Memory(location='cache_dir', verbose=0)
Pipeline(steps=[], memory=mem)
```
