---
title: "ValueError: 'loss' invalid for SGDRegressor"
description: "scikit-learn SGDRegressor invalid loss selection and how to fix."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: SGDRegressor loss invalid

```bash
$ python -c "from sklearn.linear_model import SGDRegressor; SGDRegressor(loss='mse2').fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: loss must be one of 'squared_error','huber','epsilon_insensitive','squared_epsilon_insensitive'
```

### Why this happens

Loss string isn't recognized.

### Fix

Use a supported loss.

#### Wrong code

```python
from sklearn.linear_model import SGDRegressor
SGDRegressor(loss='mse2')
```

#### Fixed code

```python
from sklearn.linear_model import SGDRegressor
SGDRegressor(loss='squared_error')
```
