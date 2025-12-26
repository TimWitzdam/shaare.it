---
title: "ImproperlyConfigured: LOGIN_URL not set"
description: "Authentication redirect fails when LOGIN_URL missing and login_required used."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImproperlyConfigured: LOGIN_URL not set

```bash
$ python manage.py runserver
...
ImproperlyConfigured: LOGIN_URL setting is not configured.
```

### Why this happens

`@login_required` needs a login URL to redirect unauthenticated users.

### Fix

Set `LOGIN_URL` in settings.

#### Wrong code

```python
# missing LOGIN_URL
```

#### Fixed code

```python
LOGIN_URL = '/accounts/login/'
```
