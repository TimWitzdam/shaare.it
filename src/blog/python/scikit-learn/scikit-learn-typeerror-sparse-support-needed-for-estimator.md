---
title: "TypeError: Estimator requires sparse/dense support"
description: "Match input format (sparse vs dense) with estimator expectations to avoid type errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: sparse/dense mismatch

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; from scipy import sparse; X=sparse.csr_matrix([[0,1],[1,0]]); LogisticRegression(solver='liblinear').fit(X, [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: Estimator does not support sparse input with selected solver
```

### Why this happens

Some solvers/estimators lack sparse support.

### Fix

Convert to dense or choose compatible solver/estimator.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
from scipy import sparse
X = sparse.csr_matrix([[0,1],[1,0]])
LogisticRegression(solver='liblinear').fit(X, [0,1])
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
from scipy import sparse
import numpy as np
X = sparse.csr_matrix([[0,1],[1,0]])
LogisticRegression(solver='saga').fit(X, [0,1])  # supports sparse
# or
LogisticRegression(solver='lbfgs').fit(np.asarray([[0,1],[1,0]]), [0,1])
```
