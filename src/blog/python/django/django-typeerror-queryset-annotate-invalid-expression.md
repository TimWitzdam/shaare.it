---
title: "TypeError: QuerySet.annotate() received invalid expression"
description: "Passing raw values instead of F/Func/Expression to annotate()."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: QuerySet.annotate() received invalid expression

```bash
$ python manage.py shell -c "from app.models import Item; Item.objects.annotate(total=1)"
Traceback (most recent call last):
  ...
TypeError: QuerySet.annotate() received non-expression(s): 1
```

### Why this happens

`annotate()` expects expressions like `Value`, `F`, `Func`, etc.

### Fix

Wrap constants with `Value()` or build expressions.

#### Wrong code

```python
Item.objects.annotate(total=1)
```

#### Fixed code

```python
from django.db.models import Value, IntegerField
Item.objects.annotate(total=Value(1, output_field=IntegerField()))
```
