---
title: "ValueError: The number of classes has to be greater than one"
description: "Ensuring multiple classes for classification models in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: classes > 1

```bash
$ python -c "from sklearn.linear_model import LogisticRegression; LogisticRegression().fit([[0],[1],[2]],[0,0,0])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: This solver needs samples of at least 2 classes in the data.
```

### Why this happens

- Training labels contain only one class.

### Fix

- Provide data with at least two distinct classes.

#### Wrong code

```python
LogisticRegression().fit([[0],[1],[2]],[0,0,0])
```

#### Fixed code

```python
LogisticRegression().fit([[0],[1],[2]],[0,1,0])
```
