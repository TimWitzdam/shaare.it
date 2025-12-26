---
title: "SuspiciousOperation: Invalid session key"
description: "Tampered or corrupted session IDs lead to invalid session key errors and logout."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## SuspiciousOperation: Invalid session key

```bash
$ curl -H 'Cookie: sessionid=bad!' http://localhost:8000/
HTTP/1.1 400 Bad Request
```

### Why this happens

Session cookie is malformed or not matching expected format.

### Fix

Clear cookies, ensure `SESSION_COOKIE_NAME` and signing settings are default.

#### Wrong code

```python
request.COOKIES['sessionid'] = 'bad!'
```

#### Fixed code

```python
# Do not modify session cookie; let Django manage it.
```
