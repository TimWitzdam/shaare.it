---
title: "ImportError: cannot import name 'path' from django.conf.urls"
description: "Using old import paths for URL routing in modern Django versions."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImportError: cannot import name 'path' from django.conf.urls

```bash
$ python manage.py runserver
Traceback (most recent call last):
  File "...", line ..., in ...
ImportError: cannot import name 'path' from 'django.conf.urls'
```

### Why this happens

Since Django 2.0+, `path` and `re_path` are in `django.urls`, not `django.conf.urls`.

### Fix

Import from `django.urls`.

#### Wrong code

```python
from django.conf.urls import path
```

#### Fixed code

```python
from django.urls import path, re_path
```
