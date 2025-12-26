---
title: "ViewError: missing template context processor"
description: "Template relies on variables provided by context processors not enabled in TEMPLATES."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ViewError: missing template context processor

```bash
$ python manage.py runserver
...
Template error: 'request' is undefined
```

### Why this happens

`django.template.context_processors.request` not enabled.

### Fix

Add to `TEMPLATES['OPTIONS']['context_processors']`.

#### Wrong code

```python
'context_processors': []
```

#### Fixed code

```python
'context_processors': [
    'django.template.context_processors.request',
]
```
