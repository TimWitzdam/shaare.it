---
title: "AppRegistryNotReady: Apps aren't loaded yet"
description: "Why the app registry is not ready and how to properly initialize Django."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AppRegistryNotReady: Apps aren't loaded yet

```bash
$ python -c "from myapp.models import Item"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
  File "/.../django/apps/registry.py", line ...
django.core.exceptions.AppRegistryNotReady: Apps aren't loaded yet.
```

### Why this happens

You imported models before calling `django.setup()` or before Django finished loading apps, or your app isn't in `INSTALLED_APPS`.

### Fix

Call `django.setup()` early and ensure your app is added to `INSTALLED_APPS`.

#### Wrong code

```python
from myapp.models import Item
items = Item.objects.all()
```

#### Fixed code

```python
import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myproject.settings")
django.setup()

from myapp.models import Item
items = Item.objects.all()
print(items)
```
