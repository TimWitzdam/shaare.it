---
title: "ValueError: 'method' invalid for PowerTransformer"
description: "scikit-learn PowerTransformer method must be 'yeo-johnson' or 'box-cox'; error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: PowerTransformer method invalid

```bash
$ python -c "from sklearn.preprocessing import PowerTransformer; PowerTransformer(method='log').fit([[1.0],[2.0],[3.0]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: method must be 'yeo-johnson' or 'box-cox'
```

### Why this happens

Unsupported method.

### Fix

Choose one of the valid methods.

#### Wrong code

```python
from sklearn.preprocessing import PowerTransformer
PowerTransformer(method='log')
```

#### Fixed code

```python
from sklearn.preprocessing import PowerTransformer
PowerTransformer(method='yeo-johnson')
```
