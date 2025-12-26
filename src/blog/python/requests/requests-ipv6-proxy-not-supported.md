---
title: "IPv6 not supported by proxy"
description: "Proxy only supports IPv4; IPv6 destinations fail through the proxy."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## IPv6 proxy not supported

```bash
$ python -c "import requests; requests.get('https://[2001:db8::1]/', proxies={'https':'http://proxy:8080'})"
Traceback (most recent call last):
  ...
requests.exceptions.ProxyError: IPv6 not supported by proxy
```

### Why this happens

The proxy cannot route IPv6 traffic.

### Fix

- Use an IPv6-capable proxy or connect directly over IPv6.

#### Wrong code

```python
import requests
proxies = {"https": "http://proxy.example:8080"}
requests.get("https://[2001:db8::1]/", proxies=proxies)
```

#### Fixed code

```python
import requests
# Use an IPv6-capable proxy or bypass it
resp = requests.get("https://[2001:db8::1]/")
print(resp.status_code)
```
