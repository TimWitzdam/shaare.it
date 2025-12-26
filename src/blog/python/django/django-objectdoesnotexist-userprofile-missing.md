---
title: "ObjectDoesNotExist: related profile does not exist"
description: "Accessing OneToOne related object that hasn't been created yet."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ObjectDoesNotExist: related profile does not exist

```bash
$ python manage.py shell -c "from django.contrib.auth.models import User; u=User.objects.create(username='a'); print(u.profile)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
DoesNotExist: Profile matching query does not exist.
```

### Why this happens

A OneToOne relation exists but the related object hasn’t been created yet.

### Fix

Create the related object or use `get_or_create()`.

#### Wrong code

```python
user = User.objects.get(pk=1)
print(user.profile.bio)
```

#### Fixed code

```python
profile, _ = Profile.objects.get_or_create(user=user)
print(profile.bio)
```
