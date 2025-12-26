---
title: "OperationalError: (sqlite3) no such table: users"
description: "Run migrations or create tables before querying—common SQLite setup mistakes in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## OperationalError: no such table

```bash
$ flask shell -c "from app import db; db.session.execute('select * from users')"
Traceback (most recent call last):
  ...
sqlite3.OperationalError: no such table: users
```

### Why this happens

The database schema hasn’t been created or migrations weren’t applied.

### Fix

- Create tables with ORM metadata or run migrations.
- Verify database path and environment configuration.

#### Wrong code

```python
# Query before creating tables
User.query.all()
```

#### Fixed code

```python
# Ensure tables exist
with app.app_context():
    db.create_all()
    users = User.query.all()
```
