---
title: "SuspiciousOperation: Bad Request (400)"
description: "Invalid request headers/host or malformed input leading to 400 errors in Django."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## SuspiciousOperation: Bad Request (400)

```bash
$ curl -H 'Host: invalid host' http://localhost:8000/
HTTP/1.1 400 Bad Request
```

### Why this happens

Invalid headers (like bad Host), oversized cookies, or tampered URL/query strings trigger `SuspiciousOperation`.

### Fix

Validate inputs, configure `ALLOWED_HOSTS`, and limit cookie sizes. Log the exception to diagnose root cause.

#### Wrong code

```python
request.META['HTTP_HOST'] = 'bad host\n'
```

#### Fixed code

```python
# Ensure Host header is valid and listed in ALLOWED_HOSTS
ALLOWED_HOSTS = ['localhost']
```
