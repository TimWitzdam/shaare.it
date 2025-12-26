---
title: 'ProgrammingError: relation "app_model" already exists'
description: "Duplicate table creation due to manual schema changes or conflicting migrations."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ProgrammingError: relation already exists

```bash
$ python -c "import sqlite3; conn=sqlite3.connect(':memory:'); conn.execute('create table x(id int)'); conn.execute('create table x(id int)')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
sqlite3.OperationalError: table x already exists
```

### Why this happens

Applying migrations that attempt to create a table which already exists, often due to manual database changes or duplicated migration operations.

### Fix

Recreate migrations properly: remove conflicting operations, run `makemigrations` and `migrate` against a clean schema or use `--fake` for already-applied operations cautiously.

#### Wrong code

```python
# migrations/0002_create_again.py
migrations.CreateModel(name='Item', ...)
```

#### Fixed code

```python
# Ensure migrations reflect the actual schema
# Remove duplicate CreateModel or use RunSQL with IF NOT EXISTS when appropriate
# Then:
# python manage.py migrate --fake app 0002
# python manage.py migrate
```
