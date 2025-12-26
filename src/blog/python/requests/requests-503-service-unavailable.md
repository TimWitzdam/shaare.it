---
title: "HTTP 503 Service Unavailable"
description: "Server temporarily unable to handle the request due to overload or maintenance."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## 503 Service Unavailable

```bash
$ python -c "import requests; r=requests.get('https://api.example.com'); print(r.status_code)"
503
```

### Why this happens

Maintenance windows, overload, or circuit breakers.

### Fix

- Respect `Retry-After`; implement retries/backoff.

#### Wrong code

```python
import requests
requests.get("https://api.example.com/heavy")
```

#### Fixed code

```python
import time
import requests
resp = requests.get("https://api.example.com/heavy")
if resp.status_code == 503:
    time.sleep(int(resp.headers.get("Retry-After", "2")))
    resp = requests.get("https://api.example.com/heavy")
print(resp.status_code)
```
