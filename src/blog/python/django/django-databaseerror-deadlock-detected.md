---
title: "DatabaseError: deadlock detected"
description: "Concurrent writes causing database deadlocks with Django ORM transactions."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## DatabaseError: deadlock detected

```bash
$ python manage.py shell
... (during concurrent transactions)
DatabaseError: deadlock detected
```

### Why this happens

Two transactions lock resources in conflicting order.

### Fix

Shorten transactions, use `select_for_update()`, and retry on deadlock.

#### Wrong code

```python
with transaction.atomic():
    a = A.objects.get(pk=1)
    b = B.objects.get(pk=1)
    a.save(); b.save()
```

#### Fixed code

```python
with transaction.atomic():
    a = A.objects.select_for_update().get(pk=1)
    b = B.objects.select_for_update().get(pk=1)
    a.save(); b.save()
# implement retry logic
```
