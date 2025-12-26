---
title: "ValueError: Found unknown categories during transform (OneHotEncoder)"
description: "Handling unseen categories in OneHotEncoder with handle_unknown to avoid errors."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: OneHotEncoder unknown categories

```bash
$ python -c "from sklearn.preprocessing import OneHotEncoder; enc=OneHotEncoder(); enc.fit([['a'],['b']]); enc.transform([['c']]).toarray()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Found unknown categories ['c'] in column 0 during transform.
```

### Why this happens

- Transform data contains categories not seen during `fit`.

### Fix

- Set `handle_unknown='ignore'` or refit including new categories.

#### Wrong code

```python
from sklearn.preprocessing import OneHotEncoder
enc = OneHotEncoder()
enc.fit([["a"],["b"]])
enc.transform([["c"]]).toarray()
```

#### Fixed code

```python
from sklearn.preprocessing import OneHotEncoder
enc = OneHotEncoder(handle_unknown='ignore')
enc.fit([["a"],["b"]])
print(enc.transform([["c"]]).toarray())
```
