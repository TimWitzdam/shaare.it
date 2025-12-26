---
title: "Warning: unapplied migrations"
description: "Django warns about pending migrations before serving requests."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## Warning: unapplied migrations

```bash
$ python manage.py runserver
You have unapplied migrations; your app may not work properly until they are applied.
```

### Why this happens

You changed models but didn’t apply migrations.

### Fix

Run `makemigrations` and `migrate`.

#### Wrong code

```python
Model.objects.create(new_field="x")
```

#### Fixed code

```bash
python manage.py makemigrations
python manage.py migrate
```
