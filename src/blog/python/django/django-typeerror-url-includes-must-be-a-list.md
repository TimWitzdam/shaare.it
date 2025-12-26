---
title: "TypeError: url `urlpatterns` must be a list"
description: "Defining urlpatterns as non-list types breaking URL resolver."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: url `urlpatterns` must be a list

```bash
$ python manage.py runserver
...
TypeError: urlpatterns must be a list or tuple
```

### Why this happens

You set `urlpatterns` to a dict or other type.

### Fix

Use a list or tuple.

#### Wrong code

```python
urlpatterns = { 'index': path('', views.index) }
```

#### Fixed code

```python
urlpatterns = [ path('', views.index) ]
```
