---
title: "ValueError: Negative values in data not allowed for certain estimators"
description: "Avoiding negative inputs for models like NMF or variants requiring non-negative data."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: negative values not allowed

```bash
$ python -c "import numpy as np; from sklearn.decomposition import NMF; X=np.array([[0,1],[-1,0]]); NMF(n_components=1).fit(X)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Negative values in data passed to NMF.
```

### Why this happens

- Some estimators require non-negative input (e.g. NMF).

### Fix

- Shift or scale data to be non-negative.

#### Wrong code

```python
from sklearn.decomposition import NMF
NMF(n_components=1).fit([[-1,0],[0,1]])
```

#### Fixed code

```python
import numpy as np
from sklearn.decomposition import NMF
X = np.array([[0,1],[1,0]])
NMF(n_components=1, init='random', random_state=42).fit(X)
```
