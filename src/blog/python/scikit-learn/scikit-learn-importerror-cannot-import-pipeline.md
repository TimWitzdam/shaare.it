---
title: "ImportError: cannot import name 'Pipeline' from sklearn.pipeline"
description: "Understanding Pipeline import failures and fixing them."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ImportError: cannot import name 'Pipeline'

```bash
$ python -c "from sklearn.pipeline import Pipeline"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'Pipeline' from 'sklearn.pipeline'
```

### Why this happens

- Old/broken scikit-learn installation.
- Shadowed by local `sklearn` files.

### Fix

- Reinstall or upgrade scikit-learn.
- Ensure correct import path.

#### Wrong code

```python
from sklearn.pipeline import Pipeline
pipe = Pipeline
pipe.fit(X, y)
```

#### Fixed code

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipe = Pipeline([
    ("scaler", StandardScaler()),
    ("clf", LogisticRegression(max_iter=1000))
])
# X: 2D features, y: 1D labels
pipe.fit([[0,1],[1,0]], [0,1])
print(pipe.predict([[0.2, 0.8]]))
```
