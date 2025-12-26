---
title: "NoReverseMatch: missing app namespace in include()"
description: "Reverse URL resolving fails without namespaces when expected."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## NoReverseMatch: missing app namespace in include()

```bash
$ python manage.py runserver
...
NoReverseMatch: Reverse for 'detail' not found. 'detail' is not a valid view function or pattern name.
```

### Why this happens

You referenced `app:detail` but the included URLs don’t define an `app_name` or proper names.

### Fix

Set `app_name` in app `urls.py` and use names consistently.

#### Wrong code

```python
# project/urls.py
urlpatterns = [
    path("blog/", include("blog.urls")),
]
# template
{% url 'blog:detail' pk=1 %}
```

#### Fixed code

```python
# blog/urls.py
app_name = "blog"
urlpatterns = [
    path("<int:pk>/", views.detail, name="detail"),
]

# project/urls.py
urlpatterns = [
    path("blog/", include("blog.urls")),
]
```
