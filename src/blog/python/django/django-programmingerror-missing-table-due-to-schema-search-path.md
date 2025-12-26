---
title: "ProgrammingError: relation does not exist due to search_path"
description: "PostgreSQL schema search_path causing missing table errors with Django."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ProgrammingError: relation does not exist due to search_path

```bash
$ python manage.py migrate
...
ProgrammingError: relation "public.app_model" does not exist
```

### Why this happens

DB uses schemas and `search_path` doesn’t include the schema where tables were created.

### Fix

Adjust DB user `search_path` or set `OPTIONS` in `DATABASES` to specify schema.

#### Wrong code

```python
DATABASES['default']['OPTIONS'] = {}
```

#### Fixed code

```python
DATABASES['default']['OPTIONS'] = {
    'options': '-c search_path=public'
}
```
