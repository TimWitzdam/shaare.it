---
title: "DatabaseError: migrations are pending — apply them"
description: "Running code against schema before applying migrations."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## DatabaseError: migrations are pending — apply them

```bash
$ python manage.py runserver
...
DatabaseError: relation "app_model" does not exist (migrations pending)
```

### Why this happens

Models changed but migrations weren’t created or applied, so the database schema is outdated.

### Fix

Run `makemigrations` and `migrate` before starting the server.

#### Wrong code

```python
# assuming new fields used before migrating
obj = Model.objects.create(new_field="x")
```

#### Fixed code

```python
# bash
# manage migrations properly before using new fields
# python manage.py makemigrations
# python manage.py migrate

# python
obj = Model.objects.create(new_field="x")
```
