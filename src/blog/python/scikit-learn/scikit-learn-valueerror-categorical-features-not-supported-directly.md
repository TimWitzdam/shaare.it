---
title: "ValueError: Categorical features are not supported directly by this estimator"
description: "Encoding categorical features before fitting estimators that require numeric input in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: categorical unsupported

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression().fit([['a','b'],['c','d']],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: could not convert string to float: 'a'
```

### Why this happens

- Raw strings passed to estimators needing numeric input.

### Fix

- Encode categories (OneHotEncoder, OrdinalEncoder) via pipelines.

#### Wrong code

```python
LogisticRegression().fit([['a'],['b']],[0,1])
```

#### Fixed code

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.linear_model import LogisticRegression

X = [['a'],['b'],['a']]
ct = ColumnTransformer([
    ('cat', OneHotEncoder(handle_unknown='ignore'), [0])
])
pipe = Pipeline([
    ('ct', ct),
    ('clf', LogisticRegression(max_iter=500))
])
pipe.fit(X, [0,1,0])
```
