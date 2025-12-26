---
title: "ValueError: Input X must be non-negative (NMF)"
description: "Ensuring non-negative features for NMF to avoid input violations in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: NMF non-negative X

```bash
$ python -c "import numpy as np; from sklearn.decomposition import NMF; X=np.array([[0,1],[-0.1,0]]); NMF(n_components=1).fit(X)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Negative values in data passed to NMF.
```

### Why this happens

- NMF requires non-negative input.

### Fix

- Shift/clip data to be non-negative.

#### Wrong code

```python
NMF(n_components=1).fit([[-0.1,0],[0,1]])
```

#### Fixed code

```python
X = np.array([[0,1],[0.1,0]])
NMF(n_components=1, init='random', random_state=42).fit(X)
```
