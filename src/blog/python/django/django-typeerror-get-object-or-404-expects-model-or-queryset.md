---
title: "TypeError: get_object_or_404() expects a Model or QuerySet"
description: "Passing wrong arguments to shortcut functions in Django."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: get_object_or_404() expects a Model or QuerySet

```bash
$ python manage.py shell -c "from django.shortcuts import get_object_or_404; get_object_or_404(123)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: get_object_or_404() expects a QuerySet or a Model class
```

### Why this happens

You passed an integer or plain object instead of a `Model` class or `QuerySet`. Django can’t build a query from such inputs.

### Fix

Provide a model and lookup kwargs, or a filtered queryset.

#### Wrong code

```python
from django.shortcuts import get_object_or_404

def view(request, pk):
    obj = get_object_or_404(pk)  # wrong
    return obj
```

#### Fixed code

```python
from django.shortcuts import get_object_or_404
from .models import Article

def view(request, pk):
    obj = get_object_or_404(Article, pk=pk)  # correct
    return obj
```
