---
title: "ImportError: cannot import name 'urlpatterns'"
description: "Improper URL configuration imports across Django apps."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImportError: cannot import name 'urlpatterns'

```bash
$ python manage.py runserver
Traceback (most recent call last):
  File ".../importlib/__init__.py", line ..., in import_module
ImportError: cannot import name 'urlpatterns' from 'myapp.urls' (myapp/urls.py)
```

### Why this happens

Your `myapp/urls.py` doesn’t define `urlpatterns`, or it is named differently, or you tried to import it directly causing circular imports.

### Fix

Ensure `urlpatterns` is defined as a list in each `urls.py`, avoid circular imports, and include app URLs via `path("", include("myapp.urls"))` in project-level `urls.py`.

#### Wrong code

```python
# project/urls.py
from myapp.urls import urlpatterns  # fragile and can cause ImportError

urlpatterns += [
    # ...
]
```

#### Fixed code

```python
# project/urls.py
from django.urls import path, include

urlpatterns = [
    path("", include("myapp.urls")),
]

# myapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
]
```
