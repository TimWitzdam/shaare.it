---
title: "ImproperlyConfigured: Middleware not found in settings"
description: "Referencing missing middleware classes in settings.MIDDLEWARE."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImproperlyConfigured: Middleware not found in settings

```bash
$ python manage.py runserver
...
ImportError: Could not import middleware 'myapp.middleware.Custom': Module not found
```

### Why this happens

You listed a middleware path that doesn’t exist or has a typo, or the module isn’t importable.

### Fix

Correct the dotted path and ensure the class is defined and importable.

#### Wrong code

```python
MIDDLEWARE = [
    'myapp.middlewares.Custom',  # typo and wrong module
]
```

#### Fixed code

```python
MIDDLEWARE = [
    'myapp.middleware.CustomMiddleware',
]

# myapp/middleware.py
class CustomMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
    def __call__(self, request):
        return self.get_response(request)
```
