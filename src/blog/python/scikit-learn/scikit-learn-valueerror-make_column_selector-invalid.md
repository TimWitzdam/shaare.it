---
title: "ValueError: make_column_selector pattern invalid"
description: "scikit-learn make_column_selector invalid regex/prefix errors and fixes."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: make_column_selector invalid

```bash
$ python -c "from sklearn.compose import make_column_selector; make_column_selector(pattern='[')(['a','b'])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Invalid pattern for make_column_selector
```

### Why this happens

Malformed regex or wrong arguments.

### Fix

Provide a valid pattern or use dtype_include/exclude.

#### Wrong code

```python
from sklearn.compose import make_column_selector
selector = make_column_selector(pattern='[')
```

#### Fixed code

```python
from sklearn.compose import make_column_selector
selector = make_column_selector(pattern='^num_')
```
