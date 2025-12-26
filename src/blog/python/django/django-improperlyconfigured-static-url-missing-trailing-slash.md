---
title: "ImproperlyConfigured: STATIC_URL missing trailing slash"
description: "Static files not found or incorrect URL generation due to missing slash in STATIC_URL."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImproperlyConfigured: STATIC_URL missing trailing slash

```bash
$ python manage.py collectstatic --noinput
...
WARNING: STATIC_URL does not end with a slash
```

### Why this happens

`STATIC_URL` should end with `/` for correct URL joins.

### Fix

Set `STATIC_URL = '/static/'`.

#### Wrong code

```python
STATIC_URL = '/static'
```

#### Fixed code

```python
STATIC_URL = '/static/'
```
