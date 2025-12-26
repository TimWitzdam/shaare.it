---
title: "ValueError: Target is multiclass but average='binary'"
description: "Choosing the right averaging strategy for multiclass metrics in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: average='binary' with multiclass target

```bash
$ python -c "from sklearn.metrics import f1_score; f1_score([0,1,2],[0,2,1], average='binary')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Target is multiclass but average='binary'. Please choose another average setting.
```

### Why this happens

- `average='binary'` only works for binary targets.

### Fix

- Use `average='macro'`, `micro`, or `weighted` for multiclass.

#### Wrong code

```python
from sklearn.metrics import f1_score
f1_score([0,1,2],[0,2,1], average='binary')
```

#### Fixed code

```python
from sklearn.metrics import f1_score
print(f1_score([0,1,2],[0,2,1], average='macro'))
```
