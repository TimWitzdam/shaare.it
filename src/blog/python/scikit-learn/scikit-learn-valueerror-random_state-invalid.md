---
title: "ValueError: 'random_state' must be an integer or None"
description: "scikit-learn error when passing an invalid random_state and how to fix it."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: invalid random_state

```bash
$ python -c "from sklearn.utils import check_random_state; check_random_state('abc')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
  File "/sklearn/utils/validation.py", line ..., in check_random_state
ValueError: 'random_state' must be an integer, RandomState instance, Generator or None
```

### Why this happens

You passed a string or an unsupported type to parameters like random_state. scikit-learn expects an int seed, a numpy RandomState/Generator, or None.

### Fix

Use an int, None, or a proper NumPy random generator.

#### Wrong code

```python
from sklearn.model_selection import train_test_split
X, y = [[1],[2],[3]], [0,1,0]
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state='seed')
```

#### Fixed code

```python
from sklearn.model_selection import train_test_split
X, y = [[1],[2],[3]], [0,1,0]
# int seed
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)

# or None
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=None)

# or numpy Generator
import numpy as np
rng = np.random.default_rng(42)
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=rng)
```
