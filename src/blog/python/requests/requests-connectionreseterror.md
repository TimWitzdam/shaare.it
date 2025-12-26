---
title: "ConnectionResetError: Connection reset by peer during request"
description: "Server-side connection resets when using Requests and how to mitigate."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ConnectionResetError: Connection reset by peer

```bash
$ python -c "import requests; requests.get('https://example.com/close-early')"
Traceback (most recent call last):
  ...
ConnectionResetError: [Errno 104] Connection reset by peer
```

### Why this happens

Server closed the connection abruptly (load balancer, proxy, server crash) or middleware terminated it.

### Fix

Implement retries/backoff, avoid overly large payloads, and ensure server/proxy keep-alive settings are sane.

#### Wrong code

```python
import requests
requests.post('https://example.com/upload', data=b'a'*10_000_000)
```

#### Fixed code

```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
session.mount('https://', HTTPAdapter(max_retries=Retry(total=3, backoff_factor=0.2)))
resp = session.post('https://example.com/upload', data=b'a'*1024)
print(resp.status_code)
```
