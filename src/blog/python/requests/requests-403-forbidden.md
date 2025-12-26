---
title: "HTTP 403 Forbidden"
description: "Server understood the request but refuses to authorize it."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## 403 Forbidden

```bash
$ python -c "import requests; r=requests.get('https://example.com/protected'); print(r.status_code)"
403
```

### Why this happens

Missing/invalid credentials, blocked user agent, IP restrictions, or missing CSRF token.

### Fix

- Provide proper authentication headers or cookies.
- Use an allowed User-Agent and include CSRF tokens for forms.

#### Wrong code

```python
import requests
requests.get("https://example.com/admin")
```

#### Fixed code

```python
import requests
headers = {"Authorization": "Bearer YOUR_TOKEN", "User-Agent": "my-app/1.0"}
resp = requests.get("https://example.com/admin", headers=headers)
print(resp.status_code)
```
