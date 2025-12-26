---
title: "Redirect Changed HTTP Method"
description: "Requests follows redirects and may change POST to GET depending on status codes and server behavior."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Redirect changed HTTP method

```bash
$ python -c "import requests; requests.post('https://httpbin.org/redirect-to?url=/get&status_code=302', data={'x':1})"
# Response may be a GET after 302
```

### Why this happens

HTTP 302 historically changes POST to GET on redirect. Requests emulates common browser behavior.

### Fix

Use 307/308 on servers to preserve the method; client-side, detect and handle redirects or send with allow_redirects=False and follow manually.

#### Wrong code

```python
import requests
requests.post('https://example.com/login', data={'u':'a','p':'b'})
```

#### Fixed code

```python
import requests
resp = requests.post('https://example.com/login', data={'u':'a','p':'b'}, allow_redirects=False, timeout=10)
if resp.is_redirect:
    location = resp.headers.get('Location')
    resp = requests.post(location, data={'u':'a','p':'b'}, timeout=10)
```
