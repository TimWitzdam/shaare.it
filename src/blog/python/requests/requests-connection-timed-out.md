---
title: "Connection timed out during TCP handshake"
description: "Requests cannot establish a TCP connection before the OS timeout."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Connection timed out

```bash
$ python -c "import requests; requests.get('http://10.255.255.1', timeout=2)"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectTimeout: HTTPConnectionPool(host='10.255.255.1', port=80): Max retries exceeded with url: / (Caused by ConnectTimeoutError(...))
```

### Why this happens

The remote host is unreachable or drops SYN packets; the OS waits until the connection attempt times out.

### Fix

- Verify network reachability (ping, traceroute).
- Use appropriate `timeout` and consider retries/backoff.

#### Wrong code

```python
import requests
# Tiny timeout to an unreachable host
requests.get("http://10.255.255.1", timeout=0.1)
```

#### Fixed code

```python
import requests
# Reasonable timeout and retries
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
session.mount("http://", HTTPAdapter(max_retries=Retry(total=3, backoff_factor=0.5)))
response = session.get("http://example.com", timeout=5)
print(response.status_code)
```
