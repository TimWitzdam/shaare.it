---
title: "DNS resolution timeout in Requests"
description: "Requests fails because DNS lookup takes too long and times out."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## DNS resolution timeout

```bash
$ python -c "import requests; requests.get('https://slow-dns.example.com', timeout=1)"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectTimeout: HTTPSConnectionPool(host='slow-dns.example.com', port=443): Max retries exceeded with url: / (Caused by ConnectTimeoutError(..., 'DNS resolution timed out'))
```

### Why this happens

DNS servers are slow/unreachable, network is congested, or the timeout provided is too strict for current conditions.

### Fix

- Increase the `timeout` value to allow DNS resolution.
- Ensure DNS servers are reachable and fast.
- Consider retry/backoff strategies.

#### Wrong code

```python
import requests
# Too strict timeout for unreliable DNS
requests.get("https://example.com", timeout=0.1)
```

#### Fixed code

```python
import requests
# Reasonable timeout and simple retry
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
retries = Retry(total=3, backoff_factor=0.3)
session.mount("https://", HTTPAdapter(max_retries=retries))

response = session.get("https://example.com", timeout=5)
print(response.status_code)
```
