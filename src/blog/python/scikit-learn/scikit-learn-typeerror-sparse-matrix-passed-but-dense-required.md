---
title: "TypeError: A sparse matrix was passed, but dense data is required"
description: "Converting sparse matrices to dense when estimators require dense input."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: sparse matrix passed, dense required

```bash
$ python -c "import numpy as np; from scipy import sparse; from sklearn.preprocessing import StandardScaler; X=sparse.csr_matrix([[0,1],[1,0]]); StandardScaler(with_mean=True).fit(X)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: A sparse matrix was passed, but dense data is required. Use X.toarray() to convert to a dense numpy array.
```

### Why this happens

- Estimator does not support sparse input (especially with `with_mean=True`).

### Fix

- Convert to dense (`X.toarray()`) or use compatible settings.

#### Wrong code

```python
from sklearn.preprocessing import StandardScaler
StandardScaler(with_mean=True).fit(X_sparse)
```

#### Fixed code

```python
from sklearn.preprocessing import StandardScaler
X_dense = X_sparse.toarray()
StandardScaler(with_mean=True).fit(X_dense)
```
