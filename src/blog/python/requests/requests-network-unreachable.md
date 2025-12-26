---
title: "OSError: [Errno 101] Network is unreachable when using Requests"
description: "Diagnosing local network issues causing Requests to fail before DNS/HTTP."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## OSError: Network is unreachable

```bash
$ python -c "import requests; requests.get('https://example.com')"
Traceback (most recent call last):
  ...
OSError: [Errno 101] Network is unreachable
```

### Why this happens

No network route (down interface, missing default route, VPN issues).

### Fix

Restore connectivity: check interface up, routes, DNS, and proxy settings.

#### Wrong code

```python
import requests
requests.get('https://example.com')  # while offline
```

#### Fixed code

```python
import requests
resp = requests.get('https://example.com', timeout=5)
print(resp.ok)
```
