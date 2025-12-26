---
title: "ValueError: BernoulliNB 'alpha' must be non-negative"
description: "scikit-learn BernoulliNB alpha cannot be negative; error and fix examples."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: BernoulliNB alpha invalid

```bash
$ python -c "from sklearn.naive_bayes import BernoulliNB; BernoulliNB(alpha=-1).fit([[0],[1]],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: alpha must be >= 0
```

### Why this happens

Smoothing factor must be non-negative.

### Fix

Use alpha >= 0.

#### Wrong code

```python
from sklearn.naive_bayes import BernoulliNB
BernoulliNB(alpha=-1)
```

#### Fixed code

```python
from sklearn.naive_bayes import BernoulliNB
BernoulliNB(alpha=1.0)
```
