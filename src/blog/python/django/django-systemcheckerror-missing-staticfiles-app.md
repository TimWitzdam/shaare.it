---
title: "SystemCheckError: staticfiles app missing"
description: "STATICFILES_DIRS and finders require django.contrib.staticfiles installed."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## SystemCheckError: staticfiles app missing

```bash
$ python manage.py collectstatic --noinput
SystemCheckError: System check identified some issues:
ERRORS:
?: (staticfiles.E001) You must enable 'django.contrib.staticfiles' in INSTALLED_APPS.
```

### Why this happens

You use staticfiles settings without installing the app.

### Fix

Add `django.contrib.staticfiles` to `INSTALLED_APPS`.

#### Wrong code

```python
INSTALLED_APPS = []
```

#### Fixed code

```python
INSTALLED_APPS = [
    'django.contrib.staticfiles',
]
```
