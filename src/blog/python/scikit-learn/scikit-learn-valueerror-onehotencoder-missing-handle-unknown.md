---
title: "ValueError: OneHotEncoder missing handle_unknown for unseen categories"
description: "Enable handle_unknown or fit on full category set to avoid transform errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: unseen categories in OneHotEncoder

```bash
$ python -c "from sklearn.preprocessing import OneHotEncoder; enc=OneHotEncoder(); enc.fit([['a'],['b']]); enc.transform([['c']]).toarray()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Found unknown categories during transform
```

### Why this happens

Transforming categories unseen during fit raises an error when `handle_unknown='error'` (default).

### Fix

Set `handle_unknown='ignore'` or ensure all categories are present during fit.

#### Wrong code

```python
from sklearn.preprocessing import OneHotEncoder
enc = OneHotEncoder()
enc.fit([['a'], ['b']])
enc.transform([['c']])
```

#### Fixed code

```python
from sklearn.preprocessing import OneHotEncoder
enc = OneHotEncoder(handle_unknown='ignore')
enc.fit([['a'], ['b']])
enc.transform([['c']]).toarray()
```
