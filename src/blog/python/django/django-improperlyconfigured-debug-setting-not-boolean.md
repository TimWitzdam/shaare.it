---
title: "ImproperlyConfigured: DEBUG setting must be a boolean"
description: "Misconfigured settings types causing runtime errors."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImproperlyConfigured: DEBUG setting must be a boolean

```bash
$ python manage.py runserver
...
ImproperlyConfigured: DEBUG setting must be a boolean
```

### Why this happens

`DEBUG` is set to a string or environment variable not cast to boolean, e.g., `"True"` instead of `True`.

### Fix

Set `DEBUG = True` or parse environment variables correctly: `DEBUG = os.getenv("DEBUG", "False").lower() == "true"`.

#### Wrong code

```python
# settings.py
DEBUG = "True"  # string, not boolean
```

#### Fixed code

```python
# settings.py
import os
DEBUG = os.getenv("DEBUG", "False").lower() == "true"
```
