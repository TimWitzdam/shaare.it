---
title: "AttributeError: 'QuerySet' object has no attribute 'model_field'"
description: "Confusing field access with queryset properties; use values or iterate."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: QuerySet missing model field attr

```bash
$ python - <<'PY'
class Q(list): pass
q=Q([{'x':1}])
try:
    print(q.x)
except Exception as e:
    print(type(e).__name__, e)
PY
AttributeError 'Q' object has no attribute 'x'
```

### Why this happens

A `QuerySet` is a collection; fields exist on instances, not the queryset itself.

### Fix

Access fields on objects or use `values()`.

#### Wrong code

```python
Item.objects.filter(active=True).name
```

#### Fixed code

```python
names = list(Item.objects.filter(active=True).values_list('name', flat=True))
```
