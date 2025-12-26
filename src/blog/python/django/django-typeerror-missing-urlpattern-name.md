---
title: "TypeError: missing URL pattern name"
description: "Templates or reverse() expect a named pattern but name is missing."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TypeError: missing URL pattern name

```bash
$ python manage.py runserver
...
NoReverseMatch: Reverse for 'detail' not found. 'detail' is not a valid view function or pattern name.
```

### Why this happens

Your URL lacks a `name=` so reverse resolving fails.

### Fix

Add `name` to patterns.

#### Wrong code

```python
path("posts/<int:pk>/", views.detail)
```

#### Fixed code

```python
path("posts/<int:pk>/", views.detail, name="detail")
```
