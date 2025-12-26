---
title: "ValueError: Input contains infinity or a value too large"
description: "Sanitizing inputs to remove inf/NaN and extreme values for scikit-learn models."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: input contains infinity or too large

```bash
$ python -c "import numpy as np; from sklearn.linear_model import LogisticRegression; X=np.array([[0,1],[np.inf,0]]); LogisticRegression().fit(X,[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Input X contains infinity or a value too large for dtype('float64').
```

### Why this happens

- Arrays contain `np.inf` or extremely large values.

### Fix

- Replace `inf` with finite values or clip.

#### Wrong code

```python
X = [[0,1],[float('inf'),0]]
LogisticRegression().fit(X, [0,1])
```

#### Fixed code

```python
import numpy as np
X = np.array([[0,1],[np.inf,0]])
X = np.nan_to_num(X, posinf=1e9)
LogisticRegression(max_iter=500).fit(X, [0,1])
```
