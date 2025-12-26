---
title: "AttributeError: settings object has no attribute TIME_ZONE"
description: "Referencing settings not defined due to missing setting or typo."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## AttributeError: settings object has no attribute TIME_ZONE

```bash
$ python manage.py shell -c "from django.conf import settings; print(settings.TIME_ZONE)"
Traceback (most recent call last):
  ...
AttributeError: 'Settings' object has no attribute 'TIME_ZONE'
```

### Why this happens

Setting missing or typo.

### Fix

Define `TIME_ZONE` in `settings.py`.

#### Wrong code

```python
TIMEZONE = 'UTC'
```

#### Fixed code

```python
TIME_ZONE = 'UTC'
```
