---
title: "TypeError: String objects not supported — convert to numeric"
description: "Converting strings to numeric encodings before fitting scikit-learn estimators to avoid type errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: strings not supported

```bash
$ python -c "from sklearn.linear_model import LinearRegression; LinearRegression().fit([['1'],['2']], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: could not convert string to float: '1'
```

### Why this happens

- Models expect numeric dtypes.

### Fix

- Cast to floats or encode via transformers.

#### Wrong code

```python
LinearRegression().fit([['1'],['2']], [0,1])
```

#### Fixed code

```python
import numpy as np
LinearRegression().fit(np.array([[1.0],[2.0]]), [0,1])
```
