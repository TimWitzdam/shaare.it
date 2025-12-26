---
title: "TypeError: Naive Bayes priors must be non-negative"
description: "Ensure class_prior values are valid probabilities for Naive Bayes."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: priors must be non-negative

```bash
$ python -c "from sklearn.naive_bayes import GaussianNB; GaussianNB(priors=[-0.1, 1.1]).fit([[0],[1]], [0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: class_prior probabilities must be non-negative and sum to 1
```

### Why this happens

`class_prior` must contain non-negative probabilities that sum to 1. Invalid values break model assumptions.

### Fix

Set valid priors or leave `None` to learn priors from data.

#### Wrong code

```python
from sklearn.naive_bayes import GaussianNB
GaussianNB(priors=[-0.1, 1.1])
```

#### Fixed code

```python
from sklearn.naive_bayes import GaussianNB
GaussianNB(priors=[0.5, 0.5])  # or priors=None
```
