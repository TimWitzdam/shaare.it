---
title: "DisallowedHost: Invalid HTTP_HOST header"
description: "ALLOWED_HOSTS configuration errors and local development hostnames."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## DisallowedHost: Invalid HTTP_HOST header

```bash
$ python -c "from django.http import HttpRequest; r=HttpRequest(); r.META['HTTP_HOST']='example.com'"
# Error usually appears during a request:
# django.core.exceptions.DisallowedHost: Invalid HTTP_HOST header: 'example.com'. You may need to add 'example.com' to ALLOWED_HOSTS.
```

### Why this happens

Incoming requests use a host not listed in `ALLOWED_HOSTS`. Django rejects such requests for security.

### Fix

Add the host/domain to `ALLOWED_HOSTS` or use `['*']` in trusted environments (not recommended for production).

#### Wrong code

```python
# settings.py
ALLOWED_HOSTS = []
```

#### Fixed code

```python
# settings.py
ALLOWED_HOSTS = ["localhost", "127.0.0.1", "example.com"]
```
