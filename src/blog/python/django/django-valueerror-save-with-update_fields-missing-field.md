---
title: "ValueError: save(update_fields=...) missing field"
description: "Calling save with update_fields including fields not on model or not changed."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ValueError: save(update_fields=...) missing field

```bash
$ python manage.py shell -c "from app.models import Item; i=Item.objects.create(name='x'); i.save(update_fields=['missing'])"
Traceback (most recent call last):
  ...
ValueError: The following fields do not exist: missing
```

### Why this happens

Field list includes a non-existent name.

### Fix

Use real fields that changed.

#### Wrong code

```python
i.save(update_fields=['missing'])
```

#### Fixed code

```python
i.name = 'y'
i.save(update_fields=['name'])
```
