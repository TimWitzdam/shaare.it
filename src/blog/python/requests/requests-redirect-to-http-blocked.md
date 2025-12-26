---
title: "Redirect to HTTP blocked"
description: "Client or policy blocks redirect from HTTPS to HTTP (downgrade)."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Redirect to HTTP blocked

```bash
$ python -c "import requests; requests.get('https://example.com/redirect-to-http')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidSchema: Redirect to non-HTTPS URL blocked
```

### Why this happens

Security policies disallow downgrading from HTTPS to HTTP.

### Fix

- Follow redirects only to HTTPS or disable redirects (not recommended).

#### Wrong code

```python
import requests
requests.get("https://example.com/redirect-to-http")
```

#### Fixed code

```python
import requests
resp = requests.get("https://example.com/redirect-to-https", allow_redirects=True)
print(resp.url)
```
