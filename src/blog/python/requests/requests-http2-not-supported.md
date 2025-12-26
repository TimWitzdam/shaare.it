---
title: "HTTP/2 not supported"
description: "Server requires HTTP/2 features; Requests uses HTTP/1.1 by default."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## HTTP/2 not supported

```bash
$ python -c "import requests; requests.get('https://h2-required.example.com')"
# May fail or degrade: server expects HTTP/2-only features
```

### Why this happens

Requests/urllib3 primarily speak HTTP/1.1. Some endpoints enforce HTTP/2.

### Fix

- Use an HTTP/2-capable client (e.g., `httpx` with h2) or configure a gateway.

#### Wrong code

```python
import requests
requests.get("https://h2-required.example.com")
```

#### Fixed code

```python
import httpx
with httpx.Client(http2=True) as client:
    r = client.get("https://h2-required.example.com")
    print(r.status_code)
```
