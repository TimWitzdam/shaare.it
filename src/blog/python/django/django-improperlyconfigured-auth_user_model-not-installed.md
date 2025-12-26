---
title: "ImproperlyConfigured: AUTH_USER_MODEL refers to model that has not been installed"
description: "Custom user model must be in INSTALLED_APPS before migrations and usage."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImproperlyConfigured: AUTH_USER_MODEL not installed

```bash
$ python manage.py makemigrations
django.core.exceptions.ImproperlyConfigured: AUTH_USER_MODEL refers to model 'accounts.User' that has not been installed
```

### Why this happens

Settings reference a user model from an app not in `INSTALLED_APPS` or migrations run before adding it.

### Fix

Add app to `INSTALLED_APPS` and set `AUTH_USER_MODEL` before first migration.

#### Wrong code

```python
AUTH_USER_MODEL = 'accounts.User'
# but 'accounts' not in INSTALLED_APPS
```

#### Fixed code

```python
INSTALLED_APPS += ['accounts']
AUTH_USER_MODEL = 'accounts.User'
```
