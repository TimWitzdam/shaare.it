---
title: "IntegrityError: null value in column violates NOT NULL constraint"
description: "Saving models without required fields set."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## IntegrityError: null value in column violates NOT NULL constraint

```bash
$ python manage.py shell -c "from app.models import Item; Item.objects.create(name=None)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
IntegrityError: null value in column "name" violates not-null constraint
```

### Why this happens

Field is defined with `null=False` and the database rejects NULLs when you try to save one.

### Fix

Provide a value, set defaults, or adjust field to allow nulls.

#### Wrong code

```python
class Item(models.Model):
    name = models.CharField(max_length=100)

Item.objects.create(name=None)
```

#### Fixed code

```python
class Item(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)  # if acceptable

Item.objects.create(name="Test")
```
