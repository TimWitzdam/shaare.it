---
title: "Resolver404: URL not found"
description: "Why certain paths return 404 and how to align URL patterns and includes."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## Resolver404: URL not found

```bash
$ curl -i http://localhost:8000/missing
HTTP/1.1 404 Not Found
```

### Why this happens

Requested path doesn't match any URL patterns due to missing include or typo.

### Fix

Add a matching URL pattern or correct the path. Ensure `include('app.urls')` is present.

#### Wrong code

```python
# project urls.py
urlpatterns = [
    path('admin/', admin.site.urls),
]
```

#### Fixed code

```python
# project urls.py
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app.urls')),
]
```
