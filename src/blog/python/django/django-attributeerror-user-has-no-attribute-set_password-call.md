---
title: "AttributeError: 'User' object has no attribute 'set_password' (call)"
description: "Calling methods that don't exist or misusing the auth user API."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: 'User' object has no attribute 'set_password' (call)

```bash
$ python manage.py shell -c "from django.contrib.auth import get_user_model; get_user_model()().set_password_call('x')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'User' object has no attribute 'set_password_call'
```

### Why this happens

A typo in method name or calling a non-existent variant like `set_password_call` instead of `set_password`. Alternatively, using a custom user model that lacks expected methods.

### Fix

Use the correct API: `user.set_password("newpass")` then `user.save()`. Verify your custom user model extends Django’s `AbstractBaseUser` or `AbstractUser` and includes the password management methods.

#### Wrong code

```python
user = get_user_model().objects.create(username="a")
user.set_password_call("secret")
user.save()
```

#### Fixed code

```python
from django.contrib.auth import get_user_model

User = get_user_model()
user = User.objects.create(username="a")
user.set_password("secret")
user.save()
```
