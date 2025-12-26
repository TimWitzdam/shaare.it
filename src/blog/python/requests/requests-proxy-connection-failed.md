---
title: "Proxy Connection Failed"
description: "Requests cannot connect to the configured proxy server due to network or DNS issues."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Proxy connection failed

```bash
$ python -c "import requests; requests.get('https://example.com', proxies={'http':'http://badproxy:3128'})"
Traceback (most recent call last):
  ...
requests.exceptions.ProxyError: Cannot connect to proxy.
```

### Why this happens

Proxy host unreachable or misconfigured.

### Fix

Verify proxy address, port, and protocol; check firewall.

#### Wrong code

```python
import requests
requests.get('https://example.com', proxies={'http':'http://badproxy:3128'})
```

#### Fixed code

```python
import requests
proxies = {'http':'http://proxy.local:3128','https':'http://proxy.local:3128'}
requests.get('https://example.com', proxies=proxies, timeout=10)
```
