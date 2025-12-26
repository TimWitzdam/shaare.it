---
title: "ValueError: cannot set NULL on non-null field"
description: "Assigning None to field with null=False or blank=False constraints."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ValueError: cannot set NULL on non-null field

```bash
$ python manage.py shell -c "from app.models import Item; i=Item(); i.name=None; i.save()"
Traceback (most recent call last):
  ...
IntegrityError: null value in column "name" violates not-null constraint
```

### Why this happens

Field doesn’t allow NULL.

### Fix

Provide value or change field to `null=True, blank=True`.

#### Wrong code

```python
i.name = None
```

#### Fixed code

```python
i.name = "Name"
# or adjust model field
```
