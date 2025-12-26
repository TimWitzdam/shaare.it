---
title: "AttributeError: 'Manager' object has no attribute 'filter_by'"
description: "Using SQLAlchemy-style methods with Django ORM managers by mistake."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: Manager has no attribute filter_by

```bash
$ python -c "class M: pass; m=M(); m.filter_by(id=1)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'M' object has no attribute 'filter_by'
```

### Why this happens

Developers familiar with SQLAlchemy use `filter_by` instead of Django's `filter`.

### Fix

Use `filter()` and field lookups (e.g., `name__icontains`).

#### Wrong code

```python
User.objects.filter_by(id=1)
```

#### Fixed code

```python
User.objects.filter(id=1)
```
