---
title: "TypeError: ManyToMany clear() on unsaved instance"
description: "Modifying M2M relations before saving the primary object."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: ManyToMany clear() on unsaved instance

```bash
$ python manage.py shell -c "from app.models import A,B; a=A(); a.bs.clear()"
Traceback (most recent call last):
  ...
ValueError: "A" instance needs to have a primary key value before a many-to-many relationship can be used.
```

### Why this happens

You tried to manipulate M2M field on an unsaved instance.

### Fix

Save the instance first.

#### Wrong code

```python
a = A()
a.bs.add(b)
```

#### Fixed code

```python
a = A.objects.create(...)
a.bs.add(b)
```
