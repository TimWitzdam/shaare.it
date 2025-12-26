---
title: "ValueError: GaussianNB 'var_smoothing' must be float"
description: "scikit-learn GaussianNB var_smoothing type errors and how to fix them."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: GaussianNB var_smoothing invalid type

```bash
$ python -c "from sklearn.naive_bayes import GaussianNB; GaussianNB(var_smoothing='auto').fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: var_smoothing must be a float
```

### Why this happens

Wrong type passed.

### Fix

Use a float value like 1e-9.

#### Wrong code

```python
from sklearn.naive_bayes import GaussianNB
GaussianNB(var_smoothing='auto')
```

#### Fixed code

```python
from sklearn.naive_bayes import GaussianNB
GaussianNB(var_smoothing=1e-9)
```
