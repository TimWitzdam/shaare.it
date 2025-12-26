---
title: "OperationalError: no such table: app_model"
description: "Missing migrations or database not migrated causing 'no such table' errors."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## OperationalError: no such table

```bash
$ python -c "import sqlite3; conn=sqlite3.connect(':memory:'); conn.execute('select * from missing')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
sqlite3.OperationalError: no such table: missing
```

### Why this happens

You attempted to access a model's table before running migrations or after deleting migrations. The database schema doesn't include the table yet.

### Fix

Run `python manage.py makemigrations` then `python manage.py migrate`. Verify `INSTALLED_APPS` includes your app and migration files exist.

#### Wrong code

```python
from myapp.models import Item
print(Item.objects.count())  # Fails if table doesn't exist
```

#### Fixed code

```python
# After running migrations
from myapp.models import Item
print(Item.objects.count())
```
