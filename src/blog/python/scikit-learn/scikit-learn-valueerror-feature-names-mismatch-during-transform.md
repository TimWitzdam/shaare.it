---
title: "ValueError: Feature names mismatch during transform"
description: "Keeping feature names consistent across fit and transform in scikit-learn pipelines."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: feature names mismatch

```bash
$ python -c "from sklearn.preprocessing import StandardScaler; import pandas as pd; X=pd.DataFrame({'a':[0,1],'b':[1,0]}); scaler=StandardScaler().fit(X); scaler.transform(pd.DataFrame({'a':[0], 'c':[1]}))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: X has feature names, but StandardScaler was fitted without feature names or with different ones.
```

### Why this happens

- Different columns or names at transform time.

### Fix

- Keep identical columns/order; use the same preprocessing pipeline.

#### Wrong code

```python
scaler.transform(pd.DataFrame({'a':[0], 'c':[1]}))
```

#### Fixed code

```python
scaler.transform(pd.DataFrame({'a':[0], 'b':[1]}))
```
