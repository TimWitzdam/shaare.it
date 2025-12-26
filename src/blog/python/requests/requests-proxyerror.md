---
title: "requests.exceptions.ProxyError: Proxy connection failed"
description: "Proxy misconfiguration issues in Requests and how to set them correctly."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ProxyError: Proxy connection failed

```bash
$ python -c "import requests; requests.get('https://example.com', proxies={'http': 'http://bad:9999'})"
Traceback (most recent call last):
  ...
requests.exceptions.ProxyError: Cannot connect to proxy.
```

### Why this happens

Proxy URL is invalid, proxy unreachable, auth required, or protocol mismatch.

### Fix

Use valid proxy URLs, include credentials if needed, or remove proxies.

#### Wrong code

```python
import requests
proxies = {"http": "http://bad:9999"}
requests.get('https://example.com', proxies=proxies)
```

#### Fixed code

```python
import requests
proxies = {
    "http": "http://user:pass@proxy.local:3128",
    "https": "http://user:pass@proxy.local:3128",
}
resp = requests.get('https://example.com', proxies=proxies, timeout=5)
print(resp.ok)
```
