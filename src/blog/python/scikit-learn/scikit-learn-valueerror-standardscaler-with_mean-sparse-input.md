---
title: "ValueError: StandardScaler with_mean=True not supported for sparse input"
description: "Use with_mean=False for sparse matrices with StandardScaler."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: StandardScaler mean with sparse

```bash
$ python -c "from sklearn.preprocessing import StandardScaler; from scipy import sparse; X=sparse.csr_matrix([[0,1],[1,0]]); StandardScaler(with_mean=True).fit_transform(X)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Cannot center sparse matrices: set with_mean=False
```

### Why this happens

Centering sparse matrices destroys sparsity and is unsupported.

### Fix

Use `with_mean=False` for sparse input or convert to dense.

#### Wrong code

```python
from sklearn.preprocessing import StandardScaler
from scipy import sparse
X = sparse.csr_matrix([[0,1],[1,0]])
StandardScaler(with_mean=True).fit_transform(X)
```

#### Fixed code

```python
from sklearn.preprocessing import StandardScaler
from scipy import sparse
X = sparse.csr_matrix([[0,1],[1,0]])
StandardScaler(with_mean=False).fit_transform(X)
```
