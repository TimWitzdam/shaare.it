---
title: "Proxy tunneling failed"
description: "HTTPS through HTTP proxy fails during CONNECT negotiation."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Proxy tunneling failed

```bash
$ python -c "import requests; requests.get('https://example.com', proxies={'https':'http://proxy:8080'})"
Traceback (most recent call last):
  ...
urllib3.exceptions.ProxyError: ('Cannot connect to proxy.', OSError('Tunnel connection failed: 407 Proxy Authentication Required'))
```

### Why this happens

The proxy requires authentication or blocks the CONNECT request to the destination.

### Fix

- Provide valid proxy credentials.
- Allow the destination in proxy ACLs.

#### Wrong code

```python
import requests
proxies = {"https": "http://proxy.example:8080"}
requests.get("https://example.com", proxies=proxies)
```

#### Fixed code

```python
import requests
proxies = {"https": "http://user:pass@proxy.example:8080"}
resp = requests.get("https://example.com", proxies=proxies)
print(resp.status_code)
```
