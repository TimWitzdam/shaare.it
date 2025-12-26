---
title: "FieldError: ambiguous field name in annotate"
description: "Using field names that clash with annotation aliases or related fields."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## FieldError: ambiguous field name in annotate

```bash
$ python manage.py shell -c "from app.models import Item; from django.db.models import Count; Item.objects.annotate(count=Count('count'))"
Traceback (most recent call last):
  ...
FieldError: Cannot resolve keyword 'count' into field. Choices are: ...
```

### Why this happens

Annotation name conflicts with field names.

### Fix

Use distinct aliases.

#### Wrong code

```python
qs.annotate(count=Count('orders'))
```

#### Fixed code

```python
qs.annotate(order_count=Count('orders'))
```
