---
title: "ValueError: The test_size should be between 0.0 and 1.0 (train_test_split)"
description: "Choosing valid test_size and train_size in train_test_split to avoid errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: train_test_split test_size out of range

```bash
$ python -c "from sklearn.model_selection import train_test_split; train_test_split([[0],[1]], [0,1], test_size=1.5)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: The test_size = 1.5 should be greater than 0.0 and less than 1.0.
```

### Why this happens

- Invalid `test_size` or `train_size`.

### Fix

- Use a float in (0,1) or integer that respects dataset size.

#### Wrong code

```python
train_test_split(X, y, test_size=1.5)
```

#### Fixed code

```python
train_test_split(X, y, test_size=0.2, random_state=42)
```
