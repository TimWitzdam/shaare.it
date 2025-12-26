---
title: "ValueError: 'drop' invalid for OneHotEncoder"
description: "scikit-learn OneHotEncoder drop argument must be 'first', 'if_binary', None or a dict; error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: OneHotEncoder drop invalid

```bash
$ python -c "from sklearn.preprocessing import OneHotEncoder; OneHotEncoder(drop='last').fit([["a"],["b"]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: drop must be 'first','if_binary',None or dict
```

### Why this happens

Unsupported drop value.

### Fix

Use one of the valid options.

#### Wrong code

```python
from sklearn.preprocessing import OneHotEncoder
OneHotEncoder(drop='last')
```

#### Fixed code

```python
from sklearn.preprocessing import OneHotEncoder
OneHotEncoder(drop='first')
```
