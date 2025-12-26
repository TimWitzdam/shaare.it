---
title: "Secure Cookie Not Sent Over HTTP"
description: "Cookie marked Secure is not sent on HTTP connections, leading to missing session/auth."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Secure cookie not sent over HTTP

```bash
$ python -c "import requests; s=requests.Session(); s.cookies.set('session','abc', secure=True, domain='example.com'); s.get('http://example.com')"
# No error, but cookie isn't sent; server treats request as unauthenticated
```

### Why this happens

Cookies with the Secure flag are only sent over HTTPS. Using HTTP prevents the cookie from being included.

### Fix

Use HTTPS URLs when relying on Secure cookies. Avoid setting Secure for local HTTP testing.

#### Wrong code

```python
import requests
s = requests.Session()
s.cookies.set('session', 'abc', secure=True, domain='example.com')
s.get('http://example.com/profile')
```

#### Fixed code

```python
import requests
s = requests.Session()
s.cookies.set('session', 'abc', secure=True, domain='example.com')
s.get('https://example.com/profile', timeout=10)
```
