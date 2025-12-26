---
title: "IntegrityError: cannot delete or update parent row"
description: "Deleting rows referenced by foreign keys without proper on_delete behavior."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## IntegrityError: cannot delete or update parent row

```bash
$ python manage.py shell -c "from app.models import Author; Author.objects.get(pk=1).delete()"
Traceback (most recent call last):
  ...
IntegrityError: update or delete on table "author" violates foreign key constraint
```

### Why this happens

Related objects prevent deletion.

### Fix

Use `on_delete=models.CASCADE` or clean up dependents.

#### Wrong code

```python
class Book(models.Model):
    author = models.ForeignKey(Author, on_delete=models.PROTECT)
```

#### Fixed code

```python
class Book(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
# or delete related books first
```
