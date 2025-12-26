---
title: "OperationalError: too many connections"
description: "Exhausted database connection pool due to improper closing or high concurrency."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## OperationalError: too many connections

```bash
$ python manage.py runserver
...
OperationalError: FATAL: sorry, too many clients already
```

### Why this happens

Leaking connections or concurrency beyond DB limits.

### Fix

Use connection pooling, close cursors, and tune DB `max_connections`.

#### Wrong code

```python
for _ in range(1000):
    cursor = connection.cursor()
    # no close
```

#### Fixed code

```python
with connection.cursor() as cursor:
    cursor.execute("SELECT 1")
# or reuse ORM, which manages connections
```
