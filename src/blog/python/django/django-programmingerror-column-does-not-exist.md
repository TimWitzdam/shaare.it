---
title: "ProgrammingError: column does not exist"
description: "Querying or filtering by fields that are not migrated yet leads to column missing errors in DB."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ProgrammingError: column does not exist

```bash
$ psql -c "select missing from app_item"
ERROR:  column "missing" does not exist
```

### Why this happens

Field added in code but migrations not applied; or querying a typo column.

### Fix

Run migrations and verify field names.

#### Wrong code

```python
Item.objects.values('missng')
```

#### Fixed code

```python
Item.objects.values('missing')  # after migration adds the field
```
