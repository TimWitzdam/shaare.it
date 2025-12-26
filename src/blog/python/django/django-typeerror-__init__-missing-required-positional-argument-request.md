---
title: "TypeError: __init__() missing required positional argument: 'request'"
description: "Instantiating class-based views incorrectly instead of using as_view()."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: **init**() missing required positional argument: 'request'

```bash
$ python manage.py runserver
Traceback (most recent call last):
  File "...", line ..., in ...
TypeError: __init__() missing 1 required positional argument: 'request'
```

### Why this happens

You instantiated a CBV directly in URL patterns, bypassing `as_view()` which handles request injection.

### Fix

Use `MyView.as_view()` in `urlpatterns`.

#### Wrong code

```python
urlpatterns = [
    path("", MyView(), name="index"),
]
```

#### Fixed code

```python
urlpatterns = [
    path("", MyView.as_view(), name="index"),
]
```
