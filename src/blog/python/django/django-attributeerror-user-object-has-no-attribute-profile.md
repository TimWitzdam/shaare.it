---
title: "AttributeError: 'User' object has no attribute 'profile'"
description: "Accessing a non-existent related attribute on Django's User model."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: 'User' object has no attribute 'profile'

```bash
$ python manage.py shell -c "from django.contrib.auth.models import User; u=User(); print(u.profile)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'User' object has no attribute 'profile'
```

### Why this happens

You assumed a OneToOne relation named `profile` exists on `User`, but it was never defined, or the related name differs (e.g., `userprofile`). In Django, `User` doesn’t include a `profile` attribute by default.

### Fix

Create a `Profile` model with a `OneToOneField(User)` and set `related_name='profile'` (or adapt your code to the existing related name). Ensure profile instances are created (via signals or during user creation).

#### Wrong code

```python
from django.contrib.auth.models import User

def view(request):
    # Raises AttributeError if profile relation isn't defined
    return User.objects.get(pk=1).profile.bio
```

#### Fixed code

```python
# models.py
from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    bio = models.TextField(blank=True)

# signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

# usage in views
from django.shortcuts import get_object_or_404

def view(request):
    user = get_object_or_404(User, pk=1)
    return user.profile.bio
```
