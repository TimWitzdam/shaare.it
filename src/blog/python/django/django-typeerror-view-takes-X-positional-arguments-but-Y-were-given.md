---
title: "TypeError: view() takes X positional arguments but Y were given"
description: "Mismatched view signatures with URL patterns and method decorators."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: view takes X positional arguments but Y were given

```bash
$ python -c "def f(a): pass; f(1,2)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: f() takes 1 positional argument but 2 were given
```

### Why this happens

URL conf passes `request` and path params; your view signature doesn't accept them, or decorators like `@login_required` are applied to methods incorrectly.

### Fix

Ensure view functions accept `request` and any captured URL parameters; for class-based views, methods should have `self` and `request`.

#### Wrong code

```python
def my_view():
    return HttpResponse("hi")
```

#### Fixed code

```python
from django.http import HttpResponse

def my_view(request):
    return HttpResponse("hi")
```
