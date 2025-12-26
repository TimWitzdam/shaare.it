---
title: "ImproperlyConfigured: Pillow is required to use ImageField"
description: "Using ImageField without Pillow installed raises ImproperlyConfigured in Django."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImproperlyConfigured: Pillow required for ImageField

```bash
$ python -c "from django.db import models; models.ImageField()"
Traceback (most recent call last):
ImproperlyConfigured: Pillow is not installed
```

### Why this happens

`ImageField` depends on Pillow for image handling.

### Fix

Install Pillow in your environment.

#### Wrong code

```python
class Photo(models.Model):
    image = models.ImageField()
```

#### Fixed code

```python
# pip install Pillow
class Photo(models.Model):
    image = models.ImageField()
```
