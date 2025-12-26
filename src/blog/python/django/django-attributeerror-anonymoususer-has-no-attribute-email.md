---
title: "AttributeError: AnonymousUser has no attribute 'email'"
description: "Accessing user attributes without checking authentication results in AttributeError for AnonymousUser."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: AnonymousUser missing email

```bash
$ python - <<'PY'
class Anonymous:
    is_authenticated=False
u=Anonymous()
try:
    print(u.email)
except Exception as e:
    print(type(e).__name__, e)
PY
AttributeError 'Anonymous' object has no attribute 'email'
```

### Why this happens

Unauthenticated users don't have user attributes.

### Fix

Check `request.user.is_authenticated` before access.

#### Wrong code

```python
return JsonResponse({'email': request.user.email})
```

#### Fixed code

```python
return JsonResponse({'email': request.user.email if request.user.is_authenticated else ''})
```
