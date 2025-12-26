---
title: "AttributeError: 'HttpRequest' object has no attribute 'user'"
description: "Missing AuthenticationMiddleware causing request.user to be absent."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: 'HttpRequest' object has no attribute 'user'

```bash
$ python manage.py runserver
...
AttributeError: 'HttpRequest' object has no attribute 'user'
```

### Why this happens

`AuthenticationMiddleware` is not enabled in `MIDDLEWARE`.

### Fix

Add `django.contrib.auth.middleware.AuthenticationMiddleware`.

#### Wrong code

```python
MIDDLEWARE = []
```

#### Fixed code

```python
MIDDLEWARE = [
  'django.contrib.auth.middleware.AuthenticationMiddleware',
]
```
