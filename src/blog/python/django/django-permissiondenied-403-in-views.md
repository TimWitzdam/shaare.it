---
title: "PermissionDenied: 403 in views"
description: "Raising PermissionDenied or failing auth checks results in 403 responses."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## PermissionDenied: 403

```bash
$ curl -i http://localhost:8000/protected/
HTTP/1.1 403 Forbidden
```

### Why this happens

User lacks permissions or `PermissionDenied` is raised in the view.

### Fix

Check `request.user.is_authenticated`, permissions, or use decorators/mixins.

#### Wrong code

```python
if not request.user.is_staff:
    raise PermissionDenied
```

#### Fixed code

```python
from django.contrib.auth.decorators import login_required, permission_required

@login_required
@permission_required('app.view_item', raise_exception=True)
def protected(request):
    ...
```
