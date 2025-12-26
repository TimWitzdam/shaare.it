---
title: "ValueError: LassoCV 'alphas' must be array-like of floats"
description: "scikit-learn error when LassoCV alphas are wrong type and how to fix it."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: LassoCV alphas wrong type

```bash
$ python -c "from sklearn.linear_model import LassoCV; LassoCV(alphas='0.1').fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: alphas must be array-like of floats
```

### Why this happens

Passing a string or non-numeric type makes validation fail; LassoCV expects a list/array of positive floats.

### Fix

Provide a list/array of floats.

#### Wrong code

```python
from sklearn.linear_model import LassoCV
model = LassoCV(alphas='0.1')
model.fit([[0],[1]],[0,1])
```

#### Fixed code

```python
from sklearn.linear_model import LassoCV
model = LassoCV(alphas=[0.01, 0.1, 1.0])
model.fit([[0],[1]],[0,1])
```
