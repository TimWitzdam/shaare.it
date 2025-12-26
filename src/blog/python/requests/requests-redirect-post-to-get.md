---
title: "Unexpected redirect behavior: POST becomes GET"
description: "Understanding 302 redirects changing POST to GET in Requests and preserving method with 307/308."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Redirect: POST becomes GET

```bash
$ python -c "import requests; r = requests.post('https://httpbin.org/redirect-to?url=/get'); print(r.request.method, r.status_code)"
POST 200
```

### Why this happens

302/303 redirects convert POST to GET.

### Fix

Use 307/308 server-side to preserve method or handle client-side accordingly.

#### Wrong code

```python
import requests
requests.post('https://example.com/redirect')
```

#### Fixed code

```python
import requests
r = requests.post('https://httpbin.org/status/307')
print(r.status_code)
```
