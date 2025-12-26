---
title: "ImproperlyConfigured: WSGI/ASGI application not found"
description: "Misconfigured application path in wsgi.py/asgi.py or settings causes startup failures."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImproperlyConfigured: WSGI/ASGI application not found

```bash
$ gunicorn project.wsgi:application
[ERROR] ModuleNotFoundError: No module named 'project'
```

### Why this happens

Wrong module path or missing `DJANGO_SETTINGS_MODULE`.

### Fix

Set correct application import path and settings.

#### Wrong code

```python
os.environ['DJANGO_SETTINGS_MODULE'] = 'wrong.settings'
```

#### Fixed code

```python
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'project.settings')
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```
