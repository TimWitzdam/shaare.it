---
title: "IntegrityError: duplicate key value violates unique constraint"
description: "Saving objects with duplicate unique fields."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## IntegrityError: duplicate key value violates unique constraint

```bash
$ python manage.py shell -c "from app.models import UserProfile; from django.db import IntegrityError; UserProfile.objects.create(slug='a'); UserProfile.objects.create(slug='a')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
IntegrityError: duplicate key value violates unique constraint "userprofile_slug_key"
```

### Why this happens

Field has `unique=True` and you attempted to save a duplicate value.

### Fix

Check for existence or catch `IntegrityError`, or enforce uniqueness at application level.

#### Wrong code

```python
UserProfile.objects.create(slug="john")
UserProfile.objects.create(slug="john")
```

#### Fixed code

```python
obj, created = UserProfile.objects.get_or_create(slug="john")
```
