---
title: "ValueError: PowerTransformer method invalid"
description: "Use 'yeo-johnson' or 'box-cox' with valid inputs for PowerTransformer."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid PowerTransformer method

```bash
$ python -c "from sklearn.preprocessing import PowerTransformer; PowerTransformer(method='invalid').fit([[1],[2]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: method must be 'yeo-johnson' or 'box-cox'
```

### Why this happens

Only `'yeo-johnson'` and `'box-cox'` are supported. Box-Cox also requires strictly positive data.

### Fix

Choose a valid method and ensure data constraints are met.

#### Wrong code

```python
from sklearn.preprocessing import PowerTransformer
PowerTransformer(method='invalid').fit([[1],[2]])
```

#### Fixed code

```python
from sklearn.preprocessing import PowerTransformer
PowerTransformer(method='yeo-johnson').fit([[1],[2]])
```
