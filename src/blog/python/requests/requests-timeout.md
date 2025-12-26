---
title: "requests.exceptions.Timeout: Request timed out"
description: "Timeouts in Requests, why they occur, and how to set timeouts correctly."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Timeout: Request timed out

```bash
$ python -c "import requests; requests.get('https://example.com', timeout=0.0001)"
Traceback (most recent call last):
  ...
requests.exceptions.Timeout: Request timed out
```

### Why this happens

The server is slow or unreachable, and no or too-strict timeout is set (default is no timeout, which can hang; too small values cause immediate timeouts).

### Fix

Set sensible timeouts (connect and read), and consider retries/backoff.

#### Wrong code

```python
import requests
requests.get('https://example.com')  # no timeout
```

#### Fixed code

```python
import requests
resp = requests.get('https://example.com', timeout=(3, 10))  # connect, read
print(resp.status_code)
```
