---
title: "ValueError: not enough values to unpack (expected X, got Y)"
description: "Unpacking errors in Django views and URL patterns."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ValueError: not enough values to unpack

```bash
$ python -c "a,b = (1,); print(a,b)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: not enough values to unpack (expected 2, got 1)
```

### Why this happens

Tuple/list destructuring expects a specific number of items. In Django this often appears when unpacking URL resolver return values or form `cleaned_data`.

### Fix

Match the number of variables to the values returned or use `_`/splat operators to absorb extras.

#### Wrong code

```python
view, args = resolver_match.func, resolver_match.args, resolver_match.kwargs
```

#### Fixed code

```python
func = resolver_match.func
args = resolver_match.args
kwargs = resolver_match.kwargs
```
