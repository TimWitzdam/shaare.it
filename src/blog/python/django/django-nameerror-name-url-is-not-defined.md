---
title: "NameError: name 'url' is not defined"
description: "Using deprecated 'url' helper in modern Django without import or wrong version."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## NameError: name 'url' is not defined

```bash
$ python manage.py runserver
Traceback (most recent call last):
  ...
NameError: name 'url' is not defined
```

### Why this happens

`url()` is removed in modern Django. You should use `path()` or `re_path()` from `django.urls`.

### Fix

Replace `url()` with `path()` / `re_path()` and import them from `django.urls`.

#### Wrong code

```python
urlpatterns = [
    url(r"^$", views.index, name="index"),
]
```

#### Fixed code

```python
from django.urls import path
urlpatterns = [
    path("", views.index, name="index"),
]
```
