---
title: "Connection Not Reused (Keep-Alive)"
description: "Connections aren’t reused due to headers or server behavior, causing performance issues in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## No keep-alive

```bash
$ python -c "import requests; [requests.get('https://example.com') for _ in range(3)]"
# Each request opens a new TCP connection
```

### Why this happens

Connection: close headers or proxies disable keep-alive. Not using a Session also opens new connections.

### Fix

Use Session to reuse connections; avoid Connection: close unless necessary.

#### Wrong code

```python
import requests
for _ in range(3):
    requests.get('https://example.com')
```

#### Fixed code

```python
import requests
s = requests.Session()
for _ in range(3):
    s.get('https://example.com', timeout=10)
```
