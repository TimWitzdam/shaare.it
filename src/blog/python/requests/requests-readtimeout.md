---
title: "requests.exceptions.ReadTimeout: Server took too long to send data"
description: "ReadTimeout errors and tuning connect/read timeouts in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ReadTimeout: Server took too long

```bash
$ python -c "import requests; requests.get('https://httpbin.org/delay/10', timeout=(3, 1))"
Traceback (most recent call last):
  ...
requests.exceptions.ReadTimeout: HTTPConnectionPool(...): Read timed out.
```

### Why this happens

Server responds too slowly during the read phase.

### Fix

Increase read timeout, optimize server, or stream content.

#### Wrong code

```python
import requests
requests.get('https://httpbin.org/delay/10', timeout=1)
```

#### Fixed code

```python
import requests
resp = requests.get('https://httpbin.org/delay/2', timeout=(3, 10))
print(resp.elapsed.total_seconds())
```
