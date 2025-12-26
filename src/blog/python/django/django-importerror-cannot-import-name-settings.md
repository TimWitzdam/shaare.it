---
title: "ImportError: cannot import name 'settings' from 'django'"
description: "Why importing Django settings fails and how to properly access configuration."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImportError: cannot import name 'settings' from 'django'

```bash
$ python -c "import django; from django import settings"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'settings' from 'django'
```

### Why this happens

You cannot import `settings` directly from the top-level `django` package. Django's settings live in your project module once `DJANGO_SETTINGS_MODULE` is configured. Also, importing settings before configuring Django leads to import errors.

### Fix

Use `from django.conf import settings` and ensure `DJANGO_SETTINGS_MODULE` is set to your project's settings module (e.g. `myproject.settings`). Call `django.setup()` when using Django outside of `manage.py`.

#### Wrong code

```python
from django import settings
print(settings.DEBUG)
```

#### Fixed code

```python
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myproject.settings")

from django.conf import settings
import django

django.setup()
print(settings.DEBUG)
```
