---
title: "ValueError: ColumnTransformer transformer returns wrong shape"
description: "scikit-learn ColumnTransformer expects transformers to return consistent 2D arrays; error and fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: ColumnTransformer wrong output shape

```bash
$ python -c "from sklearn.compose import ColumnTransformer; import numpy as np; ct=ColumnTransformer([('bad', lambda X: np.array([1,2,3]), 0)]); ct.fit_transform([[1],[2],[3]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Transformer returned array with wrong shape
```

### Why this happens

Custom transformers must adhere to fit/transform interface and return 2D arrays with rows aligned to input.

### Fix

Return correct shaped arrays or use FunctionTransformer with validate.

#### Wrong code

```python
from sklearn.compose import ColumnTransformer
ct = ColumnTransformer([
    ('bad', lambda X: [1,2,3], 0)
])
ct.fit_transform([[1],[2],[3]])
```

#### Fixed code

```python
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import FunctionTransformer
import numpy as np
ct = ColumnTransformer([
    ('good', FunctionTransformer(lambda X: np.asarray(X), validate=False), [0])
])
ct.fit_transform([[1],[2],[3]])
```
