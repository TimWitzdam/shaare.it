---
title: "AttributeError: object has no attribute 'as_view' on function views"
description: "Calling as_view() on function-based views."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: object has no attribute 'as_view' on function views

```bash
$ python manage.py runserver
Traceback (most recent call last):
  File "...", line ..., in ...
AttributeError: 'function' object has no attribute 'as_view'
```

### Why this happens

`as_view()` is for class-based views. You attempted to use it on a function-based view.

### Fix

Use function directly in `path()` or convert to a CBV and call `as_view()`.

#### Wrong code

```python
from .views import index
urlpatterns = [
    path("", index.as_view(), name="index"),
]
```

#### Fixed code

```python
from .views import index
urlpatterns = [
    path("", index, name="index"),
]

# Or CBV
class IndexView(View):
    def get(self, request):
        ...

urlpatterns = [
    path("", IndexView.as_view(), name="index"),
]
```
