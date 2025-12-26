---
title: "KeyError: SECRET_KEY not set"
description: "Environment-based settings missing SECRET_KEY leading to startup failure."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## KeyError: SECRET_KEY not set

```bash
$ DJANGO_SETTINGS_MODULE=project.settings python manage.py runserver
Traceback (most recent call last):
  ...
KeyError: 'SECRET_KEY'
```

### Why this happens

Reading `os.environ['SECRET_KEY']` without default when env variable missing.

### Fix

Provide default or fail clearly.

#### Wrong code

```python
SECRET_KEY = os.environ['SECRET_KEY']
```

#### Fixed code

```python
SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-secret')
# In production, ensure env var is set
```
