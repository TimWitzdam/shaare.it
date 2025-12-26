---
title: "ValueError: 'test_size' + 'train_size' must be <= 1.0"
description: "scikit-learn error when split sizes exceed dataset and how to fix it."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: split sizes too large

```bash
$ python -c "from sklearn.model_selection import train_test_split; train_test_split([1,2,3],[0,1,0], train_size=0.8, test_size=0.5)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: The sum of train_size and test_size = 1.3, which is greater than 1.0
```

### Why this happens

You set train_size and test_size so their sum exceeds 1.0 (or the sample count), making the split impossible.

### Fix

Ensure train_size + test_size <= 1.0.

#### Wrong code

```python
from sklearn.model_selection import train_test_split
X, y = [[1],[2],[3]], [0,1,0]
train_test_split(X, y, train_size=0.8, test_size=0.5)
```

#### Fixed code

```python
from sklearn.model_selection import train_test_split
X, y = [[1],[2],[3]], [0,1,0]
# valid sizes
train_test_split(X, y, train_size=0.7, test_size=0.3, random_state=42)
```
