---
title: "HTTP 502 Bad Gateway"
description: "Gateway/proxy received an invalid response from upstream server."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## 502 Bad Gateway

```bash
$ python -c "import requests; r=requests.get('https://gateway.example.com/service'); print(r.status_code)"
502
```

### Why this happens

Upstream server crashed, is misconfigured, or returns invalid responses to the gateway.

### Fix

- Retry with backoff; check upstream health and logs.

#### Wrong code

```python
import requests
requests.get("https://gateway.example.com/service")
```

#### Fixed code

```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
session.mount("https://", HTTPAdapter(max_retries=Retry(total=5, status_forcelist=[502], backoff_factor=0.5)))
resp = session.get("https://gateway.example.com/service")
print(resp.status_code)
```
