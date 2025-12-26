---
title: "ProgrammingError: invalid SQL in raw()"
description: "Using Model.objects.raw() with malformed SQL or wrong columns mapping."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ProgrammingError: invalid SQL in raw()

```bash
$ python manage.py shell -c "from app.models import Item; list(Item.objects.raw('SELECT * FORM item'))"
Traceback (most recent call last):
  ...
ProgrammingError: syntax error at or near "FORM"
```

### Why this happens

SQL typo or missing primary key in columns.

### Fix

Use valid SQL and include pk column alias as `id`.

#### Wrong code

```python
Item.objects.raw('SELECT * FORM item')
```

#### Fixed code

```python
Item.objects.raw('SELECT id, name FROM item')
```
