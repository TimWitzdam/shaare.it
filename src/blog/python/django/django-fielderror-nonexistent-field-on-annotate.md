---
title: "FieldError: Unknown field referenced in annotate()"
description: "Using annotate with non-existent fields or typos triggers FieldError in Django ORM."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## FieldError: annotate unknown field

```bash
$ python - <<'PY'
from collections import namedtuple
Row=namedtuple('Row','a')
rows=[Row(1)]
try:
    sum(r.b for r in rows)
except Exception as e:
    print(type(e).__name__, e)
PY
AttributeError 'Row' object has no attribute 'b'
```

### Why this happens

Annotating with lookup referencing missing field or wrong relation path.

### Fix

Use valid fields or expressions.

#### Wrong code

```python
Item.objects.annotate(total=Sum('pricee'))
```

#### Fixed code

```python
from django.db.models import Sum
Item.objects.annotate(total=Sum('price'))
```
