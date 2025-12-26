---
title: "TypeError: URLPattern conflicts with route"
description: "Duplicate or overlapping routes causing ambiguous resolution."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: URLPattern conflicts with route

```bash
$ python manage.py runserver
...
Resolver404: Tried multiple patterns: 'posts/<int:pk>/' and 'posts/<slug:pk>/'
```

### Why this happens

Overlapping patterns make resolution ambiguous.

### Fix

Disambiguate converters or order patterns carefully.

#### Wrong code

```python
path("posts/<int:pk>/", views.detail)
path("posts/<slug:pk>/", views.detail)
```

#### Fixed code

```python
path("posts/<int:pk>/", views.detail_int)
path("posts/<slug:slug>/", views.detail_slug)
```
