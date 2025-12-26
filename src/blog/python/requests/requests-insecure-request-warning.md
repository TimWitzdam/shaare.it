---
title: "InsecureRequestWarning: Unverified HTTPS request"
description: "Why Requests warns about unverified HTTPS and how to resolve securely."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## InsecureRequestWarning: Unverified HTTPS

```bash
$ python -c "import requests; requests.get('https://example.com', verify=False)"
/home/user/.local/lib/python3.x/site-packages/urllib3/connectionpool.py: InsecureRequestWarning: Unverified HTTPS request is being made.
```

### Why this happens

TLS verification is disabled, making the connection vulnerable to MITM.

### Fix

Provide proper CA bundle or fix certificates; avoid `verify=False`.

#### Wrong code

```python
import requests
requests.get('https://example.com', verify=False)
```

#### Fixed code

```python
import requests
requests.get('https://example.com', verify='/etc/ssl/certs/ca-bundle.crt')
```
