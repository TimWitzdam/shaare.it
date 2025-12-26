---
title: "No Cookies Sent"
description: "Cookies missing from Requests due to domain/path/secure flags or not using a Session."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## No cookies sent

```bash
$ python -c "import requests; requests.get('https://example.com/profile', cookies={'session':'abc'})"
# Server may not receive cookie due to domain/path mismatch
```

### Why this happens

Cookies must match domain/path, Secure flag, and require a session to persist across calls.

### Fix

Use Session; ensure domain/path match; use HTTPS for Secure cookies.

#### Wrong code

```python
import requests
requests.get('https://sub.example.com/profile', cookies={'session':'abc'})
```

#### Fixed code

```python
import requests
s = requests.Session()
s.get('https://example.com/login')
s.cookies.set('session', 'abc', domain='example.com', path='/')
s.get('https://example.com/profile', timeout=10)
```
