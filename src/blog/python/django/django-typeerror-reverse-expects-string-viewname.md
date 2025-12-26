---
title: "TypeError: reverse() expects string viewname"
description: "Passing view function instead of name/path to reverse() causing errors."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: reverse() expects string viewname

```bash
$ python manage.py shell -c "from django.urls import reverse; from app.views import index; reverse(index)"
Traceback (most recent call last):
  ...
NoReverseMatch: Reverse for '<function index>' not found.
```

### Why this happens

`reverse()` expects a view name string, not a function.

### Fix

Pass the route name or dotted path.

#### Wrong code

```python
reverse(index)
```

#### Fixed code

```python
reverse('index')
```
