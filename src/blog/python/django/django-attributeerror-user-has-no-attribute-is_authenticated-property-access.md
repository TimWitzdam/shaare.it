---
title: "AttributeError: 'User' has no attribute 'is_authenticated' (property access)"
description: "Treating is_authenticated like a method in modern Django."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: 'User' has no attribute 'is_authenticated' (property access)

```bash
$ python manage.py shell -c "from django.contrib.auth.models import AnonymousUser; print(AnonymousUser().is_authenticated())"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'bool' object is not callable
```

### Why this happens

In modern Django, `is_authenticated` is a property, not a method. Calling it like `is_authenticated()` leads to errors.

### Fix

Use `user.is_authenticated` (no parentheses).

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
