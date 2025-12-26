---
title: "ValueError: StandardScaler cannot handle sparse input when with_mean=True"
description: "Using StandardScaler with sparse matrices by setting with_mean=False or converting to dense."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: StandardScaler sparse with_mean

```bash
$ python -c "from sklearn.preprocessing import StandardScaler; from scipy import sparse; X=sparse.csr_matrix([[0,1],[1,0]]); StandardScaler(with_mean=True).fit(X)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: A sparse matrix was passed, but dense data is required. Use X.toarray() to convert to a dense numpy array.
```

### Why this happens

- Centering sparse data destroys sparsity and isn’t supported.

### Fix

- Use `with_mean=False` or convert to dense.

#### Wrong code

```python
StandardScaler(with_mean=True).fit(X_sparse)
```

#### Fixed code

```python
StandardScaler(with_mean=False).fit(X_sparse)
```
