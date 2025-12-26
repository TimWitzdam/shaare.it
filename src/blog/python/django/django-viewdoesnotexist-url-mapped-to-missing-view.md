---
title: "ViewDoesNotExist: URL mapped to missing view"
description: "Dotted path in urlpatterns points to a function/class that doesn’t exist or import fails."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ViewDoesNotExist: URL mapped to missing view

```bash
$ python manage.py runserver
...
ViewDoesNotExist: Could not import 'blog.views.missing' ...
```

### Why this happens

Import path typo or missing symbol in module.

### Fix

Correct dotted import path or define the view.

#### Wrong code

```python
path("missing/", "blog.views.missing")
```

#### Fixed code

```python
from blog.views import index
path("", index, name="index")
```
