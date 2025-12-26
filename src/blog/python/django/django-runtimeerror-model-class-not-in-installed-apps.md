---
title: "RuntimeError: Model class is not in INSTALLED_APPS"
description: "Models must be part of an installed app to be recognized by Django ORM and migrations."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## RuntimeError: Model not in INSTALLED_APPS

```bash
$ python manage.py makemigrations
RuntimeError: Model class app.models.Item doesn't declare an explicit app_label and isn't in an application in INSTALLED_APPS.
```

### Why this happens

The model file isn't under an installed app or `app_label` isn't set for standalone models.

### Fix

Move model into an app listed in `INSTALLED_APPS` or set `class Meta: app_label = 'app'`.

#### Wrong code

```python
# models outside app
class Item(models.Model):
    ...
```

#### Fixed code

```python
# in app/models.py of an installed app
class Item(models.Model):
    ...
```
