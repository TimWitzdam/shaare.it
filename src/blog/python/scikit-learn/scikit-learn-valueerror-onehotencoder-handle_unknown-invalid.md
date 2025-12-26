---
title: "ValueError: 'handle_unknown' must be 'ignore' or 'error' in OneHotEncoder"
description: "scikit-learn OneHotEncoder handle_unknown invalid value error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: OneHotEncoder handle_unknown invalid

```bash
$ python -c "from sklearn.preprocessing import OneHotEncoder; OneHotEncoder(handle_unknown='warn').fit([["a"],["b"]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: handle_unknown must be 'error' or 'ignore'
```

### Why this happens

Only 'error' or 'ignore' are supported.

### Fix

Choose 'ignore' or 'error'.

#### Wrong code

```python
from sklearn.preprocessing import OneHotEncoder
OneHotEncoder(handle_unknown='warn')
```

#### Fixed code

```python
from sklearn.preprocessing import OneHotEncoder
OneHotEncoder(handle_unknown='ignore')
```
