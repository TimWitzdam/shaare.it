---
title: "ValueError: Found array with 0 sample(s) while a minimum of 1 is required"
description: "Ensuring non-empty datasets for scikit-learn estimators to avoid zero-sample errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: zero samples

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression().fit([], [])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Found array with 0 sample(s) while a minimum of 1 is required.
```

### Why this happens

- Empty `X` or `y` provided to `fit`.

### Fix

- Provide at least one sample.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression().fit([], [])
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
LogisticRegression().fit([[0,1]], [0])
```
