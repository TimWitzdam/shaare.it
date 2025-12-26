---
title: "Cookie conflict: domain/path mismatch"
description: "Requests ignores cookies that don't match domain/path correctly."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Cookie conflict: domain/path mismatch

```bash
$ python -c "import requests; s=requests.Session(); s.cookies.set('sid','1',domain='a.example.com',path='/'); s.get('https://b.example.com')"
# Cookie not sent; no error but unexpected auth failure
```

### Why this happens

Cookies are scoped by domain and path. A cookie set for `a.example.com` won't be sent to `b.example.com`.

### Fix

- Ensure cookie domain/path matches the target host.
- Let the server set cookies via `Set-Cookie` with correct scope.

#### Wrong code

```python
import requests
s = requests.Session()
s.cookies.set("sid", "abc", domain="api.example.com", path="/")
# Request to another domain
s.get("https://auth.example.net")
```

#### Fixed code

```python
import requests
s = requests.Session()
# Request to the domain that matches the cookie
s.cookies.set("sid", "abc", domain="api.example.com", path="/")
resp = s.get("https://api.example.com/resource")
print("Cookie sent?", "sid" in resp.request.headers.get("Cookie", ""))
```
