---
title: "AttributeError: 'QuerySet' object has no attribute 'get'"
description: "Confusion between manager and queryset methods when fetching single objects."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: QuerySet has no attribute get

```bash
$ python - <<'PY'
class Q:
    def filter(self): return self
q=Q()
try:
    q.get(id=1)
except Exception as e:
    print(type(e).__name__, e)
PY
AttributeError 'Q' object has no attribute 'get'
```

### Why this happens

`get()` is available on managers and querysets, but chaining may replace manager with queryset in a variable; however, using incorrect variable types or overwriting causes confusion.

### Fix

Call `Model.objects.get(...)` or ensure your queryset is a Django `QuerySet`.

#### Wrong code

```python
qs = Model.objects.filter(active=True)
qs.get(id=1)  # In custom wrapper that isn't a real QuerySet
```

#### Fixed code

```python
obj = Model.objects.get(id=1)
# or
qs = Model.objects.filter(active=True)
obj = qs.get(id=1)
```
