---
title: "requests.exceptions.ConnectTimeout: Connection to host timed out"
description: "ConnectTimeout errors and distinguishing connect vs read timeouts in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ConnectTimeout: Connection timed out

```bash
$ python -c "import requests; requests.get('https://10.255.255.1', timeout=(0.001, 5))"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectTimeout: HTTPSConnectionPool(host='10.255.255.1', port=443): Max retries exceeded with url: / (Caused by ConnectTimeoutError(...))
```

### Why this happens

The TCP/TLS handshake couldn't complete within the connect timeout.

### Fix

Increase connect timeout or fix network routing/firewall.

#### Wrong code

```python
import requests
requests.get('https://10.255.255.1', timeout=0.01)
```

#### Fixed code

```python
import requests
resp = requests.get('https://example.com', timeout=(3, 10))
print(resp.status_code)
```
