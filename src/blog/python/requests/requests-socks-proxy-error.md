---
title: "SOCKS proxy error"
description: "PySocks errors when using SOCKS4/5 proxies with Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## SOCKS proxy error

```bash
$ python -c "import requests; requests.get('https://example.com', proxies={'https':'socks5://proxy:1080'})"
Traceback (most recent call last):
  ...
requests.exceptions.ProxyError: SOCKSHTTPSConnectionPool(host='example.com', port=443): ...
```

### Why this happens

Missing `PySocks` dependency or misconfigured SOCKS proxy credentials/host.

### Fix

- Install `PySocks` and verify proxy host/port/auth.

#### Wrong code

```python
import requests
proxies = {"https": "socks5://proxy.example:1080"}
requests.get("https://example.com", proxies=proxies)
```

#### Fixed code

```python
import requests
# pip install requests[socks]
proxies = {"https": "socks5h://user:pass@proxy.example:1080"}
resp = requests.get("https://example.com", proxies=proxies, timeout=10)
print(resp.ok)
```
