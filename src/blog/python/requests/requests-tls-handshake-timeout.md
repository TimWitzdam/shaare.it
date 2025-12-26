---
title: "TLS handshake timeout"
description: "SSL/TLS negotiation takes too long and times out in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## TLS handshake timeout

```bash
$ python -c "import requests; requests.get('https://slow-ssl.example.com', timeout=1)"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectTimeout: HTTPSConnectionPool(host='slow-ssl.example.com', port=443): Max retries exceeded
```

### Why this happens

Server is overloaded or network path is slow; handshake cannot complete in time.

### Fix

- Increase timeout and retry; investigate server performance.

#### Wrong code

```python
import requests
requests.get("https://slow-ssl.example.com", timeout=0.5)
```

#### Fixed code

```python
import requests
resp = requests.get("https://slow-ssl.example.com", timeout=10)
print(resp.status_code)
```
