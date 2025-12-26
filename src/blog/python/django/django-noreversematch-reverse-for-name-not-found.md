---
title: "NoReverseMatch: Reverse for 'name' not found"
description: "URL reversing errors when pattern names are missing or namespaces mismatch."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## NoReverseMatch: Reverse for name not found

```bash
$ python - <<'PY'
from django.urls import reverse
try:
    print(reverse('missing'))
except Exception as e:
    print(type(e).__name__, e)
PY
NoReverseMatch Reverse for 'missing' not found. 'missing' is not a valid view function or pattern name.
```

### Why this happens

You called `reverse()` with a name that doesn't exist in `urlpatterns` or forgot to include app namespace.

### Fix

Name your URL patterns and use the correct namespace or include the app's URLs.

#### Wrong code

```python
# urls.py
urlpatterns = [
    path('home/', home_view),
]
reverse('home')  # No name
```

#### Fixed code

```python
# urls.py
urlpatterns = [
    path('home/', home_view, name='home'),
]
reverse('home')
```
