---
title: "ViewError: csrf_exempt on CBV wrong usage"
description: "Applying csrf_exempt decorator incorrectly to class instead of dispatch method."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ViewError: csrf_exempt on CBV wrong usage

```bash
$ python manage.py runserver
...
403 CSRF verification failed
```

### Why this happens

Decorator applied to class incorrectly.

### Fix

Decorate the `dispatch` method.

#### Wrong code

```python
@csrf_exempt
class MyView(View):
    ...
```

#### Fixed code

```python
class MyView(View):
    @csrf_exempt
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)
```
