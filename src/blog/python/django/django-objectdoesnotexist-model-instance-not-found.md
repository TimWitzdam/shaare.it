---
title: "ObjectDoesNotExist: Model instance not found"
description: "Catching model-specific DoesNotExist when querying for objects that don't exist."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ObjectDoesNotExist: instance not found

```bash
$ python - <<'PY'
class DoesNotExist(Exception): pass
try:
    raise DoesNotExist('Not found')
except Exception as e:
    print(type(e).__name__, e)
PY
DoesNotExist Not found
```

### Why this happens

Calling `get()` for non-existent rows raises `Model.DoesNotExist`.

### Fix

Wrap `get()` in try/except and handle missing objects.

#### Wrong code

```python
user = User.objects.get(username='missing')
```

#### Fixed code

```python
try:
    user = User.objects.get(username='missing')
except User.DoesNotExist:
    user = None
```
