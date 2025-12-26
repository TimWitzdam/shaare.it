---
title: "NotFittedError: This StandardScaler instance is not fitted yet"
description: "Ensuring transformers and estimators are fitted before use in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## NotFittedError: StandardScaler not fitted

```bash
$ python -c "from sklearn.preprocessing import StandardScaler; scaler=StandardScaler(); scaler.transform([[0,1]])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
NotFittedError: This StandardScaler instance is not fitted yet.
```

### Why this happens

- Calling `transform` before `fit`.

### Fix

- Call `fit` or `fit_transform` first.

#### Wrong code

```python
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
scaler.transform([[0,1]])
```

#### Fixed code

```python
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
print(scaler.fit_transform([[0,1],[1,0]]))
```
