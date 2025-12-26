---
title: "AttributeError: 'User' object has no attribute 'is_authenticated()'"
description: "Using is_authenticated as a method instead of a property in modern Django versions."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: is_authenticated used as method

```bash
$ python - <<'PY'
class U:
    @property
    def is_authenticated(self): return True
u=U(); print(u.is_authenticated())
PY
Traceback (most recent call last):
AttributeError: 'bool' object is not callable
```

### Why this happens

Since Django 1.10+, `is_authenticated` is a property, not a method. Calling it like a function raises errors or always True/False confusion.

### Fix

Use `request.user.is_authenticated` without parentheses.

#### Wrong code

```python
if request.user.is_authenticated():
    ...
```

#### Fixed code

```python
if request.user.is_authenticated:
    ...
```
