---
title: "ValueError: RedirectView requires url or pattern_name"
description: "Using RedirectView without specifying target URL or named pattern."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ValueError: RedirectView requires url or pattern_name

```bash
$ python manage.py runserver
...
ImproperlyConfigured: RedirectView requires either 'url' or 'pattern_name'
```

### Why this happens

No target provided.

### Fix

Set `url` or `pattern_name`.

#### Wrong code

```python
path('go/', RedirectView.as_view())
```

#### Fixed code

```python
path('go/', RedirectView.as_view(url='/dest/'))
# or
path('go/', RedirectView.as_view(pattern_name='dest'))
```
