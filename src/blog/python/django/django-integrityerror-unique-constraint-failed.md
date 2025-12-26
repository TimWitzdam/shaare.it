---
title: "IntegrityError: UNIQUE constraint failed: app_model.field"
description: "Handling unique constraints and avoiding duplicate inserts in Django ORM."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## IntegrityError: UNIQUE constraint failed

```bash
$ python - <<'PY'
import sqlite3
conn=sqlite3.connect(':memory:')
conn.execute('create table u(x int unique)')
conn.execute('insert into u(x) values(1)')
conn.execute('insert into u(x) values(1)')
PY
Traceback (most recent call last):
sqlite3.IntegrityError: UNIQUE constraint failed: u.x
```

### Why this happens

You attempted to insert a duplicate value into a `UniqueField` or a unique `Constraint`. Concurrent requests can also race to create duplicates.

### Fix

Use `get_or_create`, add database-level unique constraints, and validate in forms. Consider adding `UniqueConstraint` with `deferrable` or handling `IntegrityError` for races.

#### Wrong code

```python
Item.objects.create(slug='about')
Item.objects.create(slug='about')
```

#### Fixed code

```python
obj, created = Item.objects.get_or_create(slug='about')
```
