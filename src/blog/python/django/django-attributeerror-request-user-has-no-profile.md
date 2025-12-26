---
title: "AttributeError: request.user has no attribute 'profile'"
description: "Accessing one-to-one related profile attribute when not created yet raises AttributeError."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: user.profile missing

```bash
$ python - <<'PY'
class U: pass
u=U()
try:
    print(u.profile)
except Exception as e:
    print(type(e).__name__, e)
PY
AttributeError 'U' object has no attribute 'profile'
```

### Why this happens

One-to-one related `Profile` doesn't exist yet.

### Fix

Create on signup via signals or use `get_or_create`.

#### Wrong code

```python
request.user.profile.bio
```

#### Fixed code

```python
profile, _ = Profile.objects.get_or_create(user=request.user)
profile.bio
```
