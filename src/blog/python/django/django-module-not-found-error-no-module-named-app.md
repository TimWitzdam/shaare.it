---
title: "ModuleNotFoundError: No module named 'app'"
description: "App not on PYTHONPATH or missing __init__.py files."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ModuleNotFoundError: No module named 'app'

```bash
$ python manage.py runserver
Traceback (most recent call last):
  ...
ModuleNotFoundError: No module named 'app'
```

### Why this happens

Package path wrong, missing `__init__.py`, or virtualenv not active.

### Fix

Activate env, ensure app is inside project and has `__init__.py`, and adjust `PYTHONPATH` if needed.

#### Wrong code

```python
from app import views
```

#### Fixed code

```python
from myproject.app import views  # correct dotted path
```
