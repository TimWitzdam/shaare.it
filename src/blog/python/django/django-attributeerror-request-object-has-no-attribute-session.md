---
title: "AttributeError: 'HttpRequest' object has no attribute 'session'"
description: "Using sessions without enabling SessionMiddleware."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: 'HttpRequest' object has no attribute 'session'

```bash
$ python manage.py runserver
...
AttributeError: 'HttpRequest' object has no attribute 'session'
```

### Why this happens

`SessionMiddleware` is missing from `MIDDLEWARE`, so `request.session` isn’t attached.

### Fix

Add `django.contrib.sessions.middleware.SessionMiddleware` to `MIDDLEWARE` and ensure `INSTALLED_APPS` includes `django.contrib.sessions`.

#### Wrong code

```python
# settings.py
MIDDLEWARE = []

def view(request):
    request.session["k"] = "v"  # crashes
```

#### Fixed code

```python
# settings.py
INSTALLED_APPS = [
    "django.contrib.sessions",
]
MIDDLEWARE = [
    "django.contrib.sessions.middleware.SessionMiddleware",
]

def view(request):
    request.session["k"] = "v"
```
