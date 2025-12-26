---
title: "ValueError: Found unknown label during transform (LabelEncoder)"
description: "Handling unseen labels with LabelEncoder and proper refitting/usage patterns in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: LabelEncoder unknown label

```bash
$ python -c "from sklearn.preprocessing import LabelEncoder; le=LabelEncoder(); le.fit(['a','b']); le.transform(['c'])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: y contains previously unseen labels: 'c'
```

### Why this happens

- Transforming labels not seen during `fit`.

### Fix

- Refit encoder including new labels or handle unknowns upstream.

#### Wrong code

```python
le.fit(["a","b"])
le.transform(["c"])
```

#### Fixed code

```python
le.fit(["a","b","c"])
le.transform(["c"])
```
