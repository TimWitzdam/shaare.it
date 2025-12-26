---
title: "ImproperlyConfigured: Missing URL pattern name"
description: "Using reverse() and {% url %} requires named URL patterns; missing names break resolution."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## ImproperlyConfigured: Missing URL pattern name

```bash
$ python - <<'PY'
from django.urls import reverse
try:
    reverse('home')
except Exception as e:
    print(type(e).__name__, e)
PY
NoReverseMatch Reverse for 'home' not found.
```

### Why this happens

You try to reverse a URL without giving it a `name`.

### Fix

Add `name` to patterns.

#### Wrong code

```python
path('home/', views.home)
```

#### Fixed code

```python
path('home/', views.home, name='home')
```
