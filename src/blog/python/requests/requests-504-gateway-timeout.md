---
title: "HTTP 504 Gateway Timeout"
description: "Upstream server took too long to respond and gateway timed out."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## 504 Gateway Timeout

```bash
$ python -c "import requests; r=requests.get('https://gateway.example.com/slow'); print(r.status_code)"
504
```

### Why this happens

The gateway/proxy waited for upstream but timed out due to slowness or failure.

### Fix

- Increase upstream timeouts or optimize the endpoint.
- Client-side: raise `timeout` and use retries.

#### Wrong code

```python
import requests
requests.get("https://gateway.example.com/slow", timeout=1)
```

#### Fixed code

```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
session.mount("https://", HTTPAdapter(max_retries=Retry(total=3, status_forcelist=[504], backoff_factor=0.5)))
resp = session.get("https://gateway.example.com/slow", timeout=10)
print(resp.status_code)
```
