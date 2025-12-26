---
title: "requests.exceptions.ConnectionError: Failed to establish a new connection"
description: "Network-related connection failures in Requests and how to diagnose and fix them."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ConnectionError: Failed to establish a new connection

```bash
$ python -c "import requests; requests.get('http://nonexistent.localdomain')"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectionError: HTTPConnectionPool(host='nonexistent.localdomain', port=80): Max retries exceeded with url: / (Caused by NameResolutionError("<urllib3.connection.HTTPConnection object at 0x...>: Failed to resolve 'nonexistent.localdomain'"))
```

### Why this happens

The host can't be reached (DNS fails, host down, wrong hostname, blocked by firewall, or no network).

### Fix

Use a valid reachable hostname, verify DNS/network, and ensure proxies/firewalls allow the request.

#### Wrong code

```python
import requests
requests.get('http://nonexistent.localdomain')
```

#### Fixed code

```python
import requests
resp = requests.get('https://example.com', timeout=5)
resp.raise_for_status()
print(resp.status_code)
```
