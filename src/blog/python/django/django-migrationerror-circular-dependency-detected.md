---
title: "MigrationError: Circular dependency detected"
description: "Migrations referencing each other across apps lead to circular dependency and block migration."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## MigrationError: Circular dependency detected

```bash
$ python manage.py migrate
django.db.migrations.exceptions.CircularDependencyError: app1.0002 -> app2.0001 -> app1.0002
```

### Why this happens

Migrations depend on each other via ForeignKeys or `RunPython` that require models from the other app.

### Fix

Split migrations, use `swappable_dependency`, or refactor to remove cycle; combine operations into a single app or migration.

#### Wrong code

```python
# app1 0002 depends on app2 0001
# app2 0001 depends on app1 0002
```

#### Fixed code

```python
# Remove one dependency chain and create linear order
# e.g., app2 0001 depends on app1 0001 only
```
