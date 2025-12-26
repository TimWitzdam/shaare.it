---
title: "ValidationError: model clean() raises error"
description: "Custom model validation failing during full_clean() or ModelForm save()."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ValidationError: model clean() raises error

```bash
$ python manage.py shell -c "from app.models import Item; i=Item(name=''); i.full_clean()"
Traceback (most recent call last):
  ...
ValidationError: {'name': ['This field cannot be blank.']}
```

### Why this happens

Your custom `clean()` or field validators throw errors.

### Fix

Provide valid data or adjust validation.

#### Wrong code

```python
class Item(models.Model):
    name = models.CharField(max_length=10)
    def clean(self):
        if not self.name:
            raise ValidationError({'name': 'Required'})
```

#### Fixed code

```python
class Item(models.Model):
    name = models.CharField(max_length=10)
    def clean(self):
        if not self.name:
            raise ValidationError({'name': ['Required']})
# and ensure forms supply non-empty name
```
