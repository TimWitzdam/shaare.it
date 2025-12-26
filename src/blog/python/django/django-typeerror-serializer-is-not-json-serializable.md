---
title: "TypeError: QuerySet/Model not JSON serializable"
description: "Returning raw ORM objects in JsonResponse without conversion."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: QuerySet/Model not JSON serializable

```bash
$ python manage.py shell -c "from django.http import JsonResponse; from django.contrib.auth.models import User; JsonResponse(User.objects.all(), safe=False)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: Object of type QuerySet is not JSON serializable
```

### Why this happens

`JsonResponse` expects dict/list of primitives. ORM objects aren’t serializable by default.

### Fix

Serialize using `.values()` or DRF serializers, or convert to plain Python types.

#### Wrong code

```python
return JsonResponse(User.objects.first())
```

#### Fixed code

```python
user = User.objects.values("id", "username").first()
return JsonResponse(user)
```
