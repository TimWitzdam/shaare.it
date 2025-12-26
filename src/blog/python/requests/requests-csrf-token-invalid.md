---
title: "Invalid CSRF Token"
description: "403 Forbidden due to invalid or stale CSRF token in Requests submissions."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid CSRF token

```bash
$ python -c "import requests; requests.post('https://example.com/form', headers={'X-CSRFToken':'stale'}, data={'a':1})"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 403 Client Error: Forbidden (Invalid CSRF token)
```

### Why this happens

Tokens are tied to sessions and expire. Using an old token or not matching the cookie/session causes rejection.

### Fix

Establish a session, obtain a fresh token, and send both the token header and session cookie.

#### Wrong code

```python
import requests
requests.post('https://example.com/form', headers={'X-CSRFToken': 'old'})
```

#### Fixed code

```python
import requests
s = requests.Session()
_ = s.get('https://example.com/form')
csrf = s.cookies.get('csrftoken')
headers = {"X-CSRFToken": csrf}
s.post('https://example.com/form', headers=headers, data={'a':1}, timeout=10)
```
