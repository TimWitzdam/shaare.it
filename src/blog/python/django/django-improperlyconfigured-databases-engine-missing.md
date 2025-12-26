---
title: "ImproperlyConfigured: DATABASES engine missing"
description: "Misconfigured DATABASES setting leading to missing backend engine errors."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImproperlyConfigured: DATABASES engine missing

```bash
$ python manage.py migrate
django.core.exceptions.ImproperlyConfigured: 'ENGINE' must be specified in DATABASES['default']
```

### Why this happens

`DATABASES['default']['ENGINE']` isn't set or is invalid.

### Fix

Use a valid engine like `django.db.backends.sqlite3` or PostgreSQL backend.

#### Wrong code

```python
DATABASES = {
  'default': {
    'NAME': BASE_DIR / 'db.sqlite3',
  }
}
```

#### Fixed code

```python
DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.sqlite3',
    'NAME': BASE_DIR / 'db.sqlite3',
  }
}
```
