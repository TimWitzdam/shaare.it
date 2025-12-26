---
title: "MigrationError: Inconsistent migration state"
description: "Migrations applied in DB but files missing in repo, or vice versa, causing inconsistency."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## MigrationError: Inconsistent migration state

```bash
$ python manage.py migrate
# Errors show that migration file is missing/applied mismatch
```

### Why this happens

Migration history doesn't match migration files due to rebases or file deletions.

### Fix

Recreate missing migrations, use `--fake` or `--fake-initial` appropriately, and align DB state with code.

#### Wrong code

```python
# Deleted 0002 but DB has it applied
```

#### Fixed code

```python
# Restore 0002 or fake-unapply/apply to reconcile
# python manage.py migrate app 0002 --fake
```
