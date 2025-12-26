---
title: "OperationalError: connection refused"
description: "Database service unreachable from Django due to host/port/credentials issues."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## OperationalError: connection refused

```bash
$ psql -h localhost -p 5432 -U user -d db
psql: error: connection to server at "localhost" (::1), port 5432 failed: Connection refused
```

### Why this happens

The database server isn't running, wrong host/port, firewall blocks, or credentials are invalid.

### Fix

Start the DB service, verify settings `HOST`, `PORT`, `USER`, `PASSWORD`, and network reachability.

#### Wrong code

```python
DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.postgresql',
    'HOST': 'localhost',
    'PORT': 5433,  # wrong
  }
}
```

#### Fixed code

```python
DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.postgresql',
    'HOST': 'localhost',
    'PORT': 5432,
    'USER': 'app',
    'PASSWORD': 'secret',
    'NAME': 'appdb',
  }
}
```
