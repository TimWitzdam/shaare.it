---
title: "ImproperlyConfigured: The included URLconf does not appear to have any patterns"
description: "ROOT_URLCONF missing or empty urlpatterns cause ImproperlyConfigured on startup."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImproperlyConfigured: URLconf empty or missing

```bash
$ python manage.py runserver
ImproperlyConfigured: The included URLconf 'project.urls' does not appear to have any patterns in it.
```

### Why this happens

`ROOT_URLCONF` points to a module without `urlpatterns` or it's empty.

### Fix

Define `urlpatterns` with at least one pattern and ensure `ROOT_URLCONF` is correct.

#### Wrong code

```python
# settings.py
ROOT_URLCONF = 'project.urls'
# project/urls.py
urlpatterns = []
```

#### Fixed code

```python
# project/urls.py
from django.urls import path
urlpatterns = [
    path('health/', lambda r: HttpResponse('ok')),
]
```
