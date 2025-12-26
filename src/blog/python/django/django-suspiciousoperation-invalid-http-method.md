---
title: "SuspiciousOperation: Invalid HTTP method"
description: "Non-standard or disallowed HTTP methods used in requests raise SuspiciousOperation in Django."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## SuspiciousOperation: Invalid HTTP method

```bash
$ curl -X FOO http://localhost:8000/
HTTP/1.1 405 Method Not Allowed
```

### Why this happens

Using unsupported methods or method spoofing without proper middleware.

### Fix

Limit methods via view decorators and ensure clients use GET/POST/PUT/DELETE as appropriate.

#### Wrong code

```python
@require_http_methods(["FOO"])  # invalid
```

#### Fixed code

```python
from django.views.decorators.http import require_http_methods
@require_http_methods(["GET", "POST"])
def view(request):
    ...
```
