---
title: "NoReverseMatch: reverse for view with kwargs not found"
description: "Mismatch between URL pattern converters and provided kwargs."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## NoReverseMatch: reverse for view with kwargs not found

```bash
$ python manage.py shell -c "from django.urls import reverse; reverse('post-detail', kwargs={'pk':'abc'})"
Traceback (most recent call last):
  ...
NoReverseMatch: Reverse for 'post-detail' with keyword arguments '{'pk': 'abc'}' not found. 1 pattern(s) tried: ['posts/(?P<pk>[0-9]+)/']
```

### Why this happens

URL expects integer pk but you passed a non-integer string.

### Fix

Pass the correct type or adjust the converter.

#### Wrong code

```python
reverse('post-detail', kwargs={'pk': 'abc'})
```

#### Fixed code

```python
reverse('post-detail', kwargs={'pk': 123})
# or change pattern to path('posts/<slug:pk>/', ...)
```
