---
title: "ValueError: FunctionTransformer 'validate' must be bool"
description: "scikit-learn FunctionTransformer validate flag type error and fix examples."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: FunctionTransformer validate invalid

```bash
$ python -c "from sklearn.preprocessing import FunctionTransformer; FunctionTransformer(validate='yes').fit([[1],[2],[3]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: validate must be a boolean
```

### Why this happens

Wrong type for validate.

### Fix

Set validate=True/False.

#### Wrong code

```python
from sklearn.preprocessing import FunctionTransformer
FunctionTransformer(validate='yes')
```

#### Fixed code

```python
from sklearn.preprocessing import FunctionTransformer
FunctionTransformer(validate=False)
```
