---
title: "ValueError: 'test_size' and 'train_size' cannot both be None"
description: "scikit-learn train_test_split sizes None error and how to resolve."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: split sizes both None

```bash
$ python -c "from sklearn.model_selection import train_test_split; train_test_split([1,2,3],[0,1,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: train_size and test_size cannot both be None
```

### Why this happens

Without specifying test_size or train_size, scikit-learn can't determine how to split the data when default sizes are incompatible with the input.

### Fix

Provide at least one of test_size or train_size.

#### Wrong code

```python
from sklearn.model_selection import train_test_split
X, y = [[1],[2],[3]], [0,1,0]
X_train, X_test, y_train, y_test = train_test_split(X, y)
```

#### Fixed code

```python
from sklearn.model_selection import train_test_split
X, y = [[1],[2],[3]], [0,1,0]
# specify test_size
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)

# or specify train_size
X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=0.67, random_state=42)
```
