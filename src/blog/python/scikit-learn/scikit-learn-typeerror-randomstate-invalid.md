---
title: "TypeError: invalid RandomState or seed"
description: "Fix invalid random_state usage across scikit-learn estimators."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: invalid random_state

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression(random_state='seed').fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: random_state must be an int, RandomState instance or None
```

### Why this happens

`random_state` must be an integer, a `numpy.random.RandomState`/`Generator`, or `None`. Strings or other types are invalid.

### Fix

Pass a reproducible integer seed or a proper RNG object.

#### Wrong code

```python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression(random_state='seed')
clf.fit([[0],[1]], [0,1])
```

#### Fixed code

```python
from sklearn.linear_model import LogisticRegression
clf = LogisticRegression(random_state=42)
clf.fit([[0],[1]], [0,1])
```
