---
title: "TypeError: View must return an HttpResponse"
description: "Returning None or wrong type from a Django view function."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: View must return an HttpResponse

```bash
$ python manage.py runserver
...
ValueError: The view returned None instead of an HttpResponse object.
```

### Why this happens

View returns `None`, plain string, or dict without using `JsonResponse`/`render`.

### Fix

Return `HttpResponse`, `JsonResponse`, or `render()` result.

#### Wrong code

```python
def index(request):
    pass
```

#### Fixed code

```python
def index(request):
    return HttpResponse("ok")
```
