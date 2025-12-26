---
title: "PermissionDenied: login required for view"
description: "Accessing protected views without authentication."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## PermissionDenied: login required for view

```bash
$ curl -i http://localhost:8000/protected/
HTTP/1.1 403 Forbidden
...
```

### Why this happens

View is protected by `@login_required` or permission checks; anonymous users are denied.

### Fix

Login first or configure `LOGIN_URL`. For APIs, return 401 and handle auth tokens.

#### Wrong code

```python
@login_required
def secret(request):
    return HttpResponse("ok")
```

#### Fixed code

```python
# Ensure login flow works and LOGIN_URL is set
LOGIN_URL = "/accounts/login/"
```
