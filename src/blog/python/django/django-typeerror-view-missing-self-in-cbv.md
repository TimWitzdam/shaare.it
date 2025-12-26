---
title: "TypeError: method missing 'self' in class-based view"
description: "Defining CBV methods without self/request parameters causes TypeError when dispatched."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: CBV method missing self

```bash
$ python - <<'PY'
class C:
    def get(): pass
c=C()
try:
    c.get()
except Exception as e:
    print(type(e).__name__, e)
PY
TypeError get() missing 1 required positional argument: 'self'
```

### Why this happens

Methods on CBV must accept `self` and `request`.

### Fix

Define `def get(self, request, *args, **kwargs)`.

#### Wrong code

```python
class MyView(View):
    def get(request):
        ...
```

#### Fixed code

```python
class MyView(View):
    def get(self, request):
        ...
```
