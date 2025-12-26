---
title: "ImproperlyConfigured: staticfiles not configured"
description: "Missing STATIC_URL/STATIC_ROOT or app setup breaks static files collection and serving."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImproperlyConfigured: staticfiles not configured

```bash
$ python manage.py collectstatic
ImproperlyConfigured: You're using the staticfiles app without having set the STATIC_URL setting to a non-empty value.
```

### Why this happens

`STATIC_URL`/`STATIC_ROOT` not set or `django.contrib.staticfiles` missing.

### Fix

Set `STATIC_URL`, `STATIC_ROOT`, and add app to `INSTALLED_APPS`.

#### Wrong code

```python
STATIC_URL = ''
```

#### Fixed code

```python
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
INSTALLED_APPS += ['django.contrib.staticfiles']
```
