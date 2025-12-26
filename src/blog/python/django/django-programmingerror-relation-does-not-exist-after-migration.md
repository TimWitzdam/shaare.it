---
title: "ProgrammingError: relation does not exist after migration"
description: "Accessing models before migrations applied or wrong database schema causes relation errors."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ProgrammingError: relation does not exist

```bash
$ python manage.py shell -c "from app.models import Item; print(Item.objects.count())"
# Traceback with ProgrammingError: relation "app_item" does not exist
```

### Why this happens

Migrations not applied to the current database or you're pointing to a different DB.

### Fix

Run migrations for the active settings and ensure `DATABASES` points to the correct instance.

#### Wrong code

```python
# Using test DB settings by accident
DATABASES = test_databases
```

#### Fixed code

```python
# Ensure production/dev settings match your environment
# python manage.py migrate
```
