---
title: "ImproperlyConfigured: Middleware is missing or misordered"
description: "Common middleware configuration mistakes leading to errors and broken requests."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImproperlyConfigured: Middleware missing or misordered

```bash
$ python -c "from django.conf import settings; print(settings.MIDDLEWARE)"
# Error occurs at runtime if required middleware isn't present
```

### Why this happens

Required middleware like `SessionMiddleware`, `CsrfViewMiddleware`, or `AuthenticationMiddleware` is not in `MIDDLEWARE`, or ordering breaks dependencies.

### Fix

Add required middleware and keep recommended order: security, sessions, common, CSRF, auth, messages, clickjacking.

#### Wrong code

```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
]
```

#### Fixed code

```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```
