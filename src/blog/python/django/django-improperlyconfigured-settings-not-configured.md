---
title: "ImproperlyConfigured: Requested setting INSTALLED_APPS, but settings are not configured"
description: "Settings not configured and how to initialize Django properly."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImproperlyConfigured: settings are not configured

```bash
$ python -c "from django.conf import settings; print(settings.INSTALLED_APPS)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
  File "/.../django/conf/__init__.py", line ...
django.core.exceptions.ImproperlyConfigured: Requested setting INSTALLED_APPS, but settings are not configured
```

### Why this happens

`DJANGO_SETTINGS_MODULE` is not set, or `django.setup()` wasn't called in a standalone script. Django cannot access project settings without initialization.

### Fix

Set `DJANGO_SETTINGS_MODULE` and call `django.setup()` before touching settings or models.

#### Wrong code

```python
from django.conf import settings
print(settings.SECRET_KEY)
```

#### Fixed code

```python
import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myproject.settings")
django.setup()

from django.conf import settings
print(settings.SECRET_KEY)
```
