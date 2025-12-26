---
title: "CSRF Token Missing"
description: "403 Forbidden when CSRF protection requires a token that is not provided."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## CSRF token missing

```bash
$ python -c "import requests; requests.post('https://example.com/form', data={'a':1})"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 403 Client Error: Forbidden (CSRF token missing)
```

### Why this happens

Many web apps require a CSRF token in POST/PUT/DELETE to prevent cross-site attacks. Without it, the server blocks the request.

### Fix

Fetch the CSRF token first (from a cookie or hidden form field) and include it in headers/form data as required by the app.

#### Wrong code

```python
import requests
requests.post('https://example.com/form', data={'name': 'Alice'})
```

#### Fixed code

```python
import requests
s = requests.Session()
page = s.get('https://example.com/form')
csrf = s.cookies.get('csrftoken')  # or parse hidden input
headers = {"X-CSRFToken": csrf}
s.post('https://example.com/form', data={'name': 'Alice'}, headers=headers, timeout=10)
```
