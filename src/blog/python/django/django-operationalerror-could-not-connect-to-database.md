---
title: "OperationalError: could not connect to database"
description: "Database service down or wrong credentials in settings.DATABASES."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## OperationalError: could not connect to database

```bash
$ python manage.py migrate
Traceback (most recent call last):
  ...
OperationalError: could not connect to server: Connection refused
```

### Why this happens

DB not running, wrong host/port, or firewall blocking connection.

### Fix

Start DB, verify credentials in `settings.DATABASES`, and network reachability.

#### Wrong code

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'db', 'USER': 'u', 'PASSWORD': 'p', 'HOST': 'localhost', 'PORT': '9999'
    }
}
```

#### Fixed code

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'db', 'USER': 'u', 'PASSWORD': 'p', 'HOST': '127.0.0.1', 'PORT': '5432'
    }
}
# Ensure PostgreSQL is running
```
