---
title: "IntegrityError: FOREIGN KEY constraint failed"
description: "Foreign key integrity issues from deleting parent rows or invalid references."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## IntegrityError: FOREIGN KEY constraint failed

```bash
$ python - <<'PY'
import sqlite3
conn=sqlite3.connect(':memory:')
conn.executescript('create table p(id integer primary key); create table c(pid integer references p(id));')
conn.execute('insert into c(pid) values(999)')
PY
Traceback (most recent call last):
sqlite3.IntegrityError: FOREIGN KEY constraint failed
```

### Why this happens

Saving a child pointing to a non-existent parent or deleting a parent when ON DELETE is restricted.

### Fix

Ensure parent objects exist before assigning, and configure `on_delete=models.CASCADE/PROTECT/SET_NULL` properly. Wrap deletes in transactions and handle `ProtectedError`.

#### Wrong code

```python
child.parent_id = 999
child.save()
```

#### Fixed code

```python
parent = Parent.objects.get(pk=1)
child.parent = parent
child.save()
```
