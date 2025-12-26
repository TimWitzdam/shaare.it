---
title: "ValueError: Found array with dtype object"
description: "Fixing object dtype inputs by converting to numeric types for scikit-learn models."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: dtype object

```bash
$ python -c "import numpy as np; from sklearn.linear_model import LogisticRegression; X=np.array([[0,'a'],[1,'b']], dtype=object); LogisticRegression().fit(X,[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: could not convert string to float: 'a'
```

### Why this happens

- Non-numeric features passed to models expecting numeric input.

### Fix

- Encode/convert to numeric, or use `ColumnTransformer`/encoders.

#### Wrong code

```python
X = np.array([[0,'a'],[1,'b']], dtype=object)
LogisticRegression().fit(X,[0,1])
```

#### Fixed code

```python
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
import numpy as np

X = np.array([[0,'a'],[1,'b']], dtype=object)
ct = ColumnTransformer([
    ('categorical', OneHotEncoder(handle_unknown='ignore'), [1])
], remainder='passthrough')
pipe = Pipeline([
    ('ct', ct),
    ('clf', LogisticRegression(max_iter=500))
])
pipe.fit(X, [0,1])
```
