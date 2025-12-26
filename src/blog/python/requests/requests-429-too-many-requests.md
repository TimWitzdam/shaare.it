---
title: "HTTP 429 Too Many Requests"
description: "Rate-limited by the server due to excessive requests in a short time."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## 429 Too Many Requests

```bash
$ python -c "import requests; [requests.get('https://api.example.com') for _ in range(100)]"
# Eventually: 429 Too Many Requests
```

### Why this happens

The server enforces rate limits per client/IP/token.

### Fix

- Implement exponential backoff and respect `Retry-After` headers.

#### Wrong code

```python
import requests
for _ in range(100):
    requests.get("https://api.example.com/data")
```

#### Fixed code

```python
import time
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
session.mount("https://", HTTPAdapter(max_retries=Retry(total=3, status_forcelist=[429], backoff_factor=1.0)))

resp = session.get("https://api.example.com/data")
if resp.status_code == 429:
    retry_after = int(resp.headers.get("Retry-After", "1"))
    time.sleep(retry_after)
    resp = session.get("https://api.example.com/data")
print(resp.status_code)
```
