---
title: "ValueError: Unknown metric 'f1_micro' misnamed"
description: "Using correct metric names and understanding variants to avoid unknown metric errors in scikit-learn."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: metric misnamed

```bash
$ python -c "from sklearn.metrics import get_scorer; get_scorer('f1_microo')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Unknown scorer 'f1_microo'
```

### Why this happens

- Typo in metric name.

### Fix

- Use valid names like `f1_micro`, `f1_macro`, etc.

#### Wrong code

```python
get_scorer('f1_microo')
```

#### Fixed code

```python
get_scorer('f1_micro')
```
