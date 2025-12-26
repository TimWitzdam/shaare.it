---
title: "SynchronousOnlyOperation: attempted to use async ORM in sync view"
description: "Mixing async and sync contexts incorrectly in Django views."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## SynchronousOnlyOperation: attempted to use async ORM in sync view

```bash
$ python manage.py runserver
...
SynchronousOnlyOperation: You cannot call this from an async context - use a thread or sync_to_async.
```

### Why this happens

You declared `async def view` but called synchronous ORM methods directly.

### Fix

Wrap sync calls with `sync_to_async` or keep view synchronous.

#### Wrong code

```python
async def view(request):
    obj = Model.objects.first()  # sync ORM in async
```

#### Fixed code

```python
from asgiref.sync import sync_to_async

async def view(request):
    obj = await sync_to_async(Model.objects.first)()
```
