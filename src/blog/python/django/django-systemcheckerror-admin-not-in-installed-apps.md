---
title: "SystemCheckError: The admin app is not in INSTALLED_APPS"
description: "Why Django admin fails to load and how to enable it correctly."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## SystemCheckError: admin not in INSTALLED_APPS

```bash
$ python manage.py runserver
SystemCheckError: System check identified some issues:
ERRORS:
?: (admin.E404) 'django.contrib.admin' must be in INSTALLED_APPS
```

### Why this happens

The Django admin requires `django.contrib.admin` and its dependencies in `INSTALLED_APPS` and URLs configured.

### Fix

Add `django.contrib.admin`, include admin URLs, and ensure templates/static are configured.

#### Wrong code

```python
INSTALLED_APPS = [
    'django.contrib.auth',
    'django.contrib.contenttypes',
]
```

#### Fixed code

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
]

# urls.py
from django.contrib import admin
from django.urls import path
urlpatterns = [
    path('admin/', admin.site.urls),
]
```
