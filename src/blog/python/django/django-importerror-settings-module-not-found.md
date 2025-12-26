---
title: "ImportError: settings module not found"
description: "DJANGO_SETTINGS_MODULE misconfigured or module path missing."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImportError: settings module not found

```bash
$ DJANGO_SETTINGS_MODULE=project.missing python manage.py runserver
Traceback (most recent call last):
  ...
ImportError: No module named 'project.missing'
```

### Why this happens

`DJANGO_SETTINGS_MODULE` points to a non-existent module.

### Fix

Use the correct dotted path and ensure `__init__.py` exists.

#### Wrong code

```bash
export DJANGO_SETTINGS_MODULE=proj.settings_local
python manage.py runserver
```

#### Fixed code

```bash
export DJANGO_SETTINGS_MODULE=project.settings
python manage.py runserver
```
