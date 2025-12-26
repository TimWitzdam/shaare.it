---
title: "MigrationError: missing migration dependency"
description: "Referencing a migration that does not exist or wrong order dependencies."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## MigrationError: missing migration dependency

```bash
$ python manage.py migrate
...
django.db.migrations.graph.NodeNotFoundError: Migration app.0003 depends on app.0002 which does not exist.
```

### Why this happens

You edited migration dependencies manually or deleted a migration.

### Fix

Recreate missing migration or adjust dependency chain.

#### Wrong code

```python
# app/migrations/0003_auto.py
dependencies = [('app', '0002_missing')]
```

#### Fixed code

```python
dependencies = [('app', '0002_actual')]
# or regenerate migrations
```
