---
title: "TypeError: IsotonicRegression y_min/y_max invalid or y increasing wrong type"
description: "Set y_min/y_max and y_min < y_max; y increasing should be boolean or 'auto'."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## TypeError: IsotonicRegression parameter types invalid

```bash
$ python -c "from sklearn.isotonic import IsotonicRegression; IsotonicRegression(y_min=1, y_max=0).fit([0,1],[0,1])"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: y_min must be < y_max and parameters must have valid types
```

### Why this happens

Invalid ranges or types for parameters raise errors.

### Fix

Ensure `y_min < y_max` and `y_increasing` is `True/False` or `'auto'`.

#### Wrong code

```python
from sklearn.isotonic import IsotonicRegression
IsotonicRegression(y_min=1, y_max=0)
```

#### Fixed code

```python
from sklearn.isotonic import IsotonicRegression
IsotonicRegression(y_min=0, y_max=1, y_min=None, y_max=None, y_increasing=True)
```
