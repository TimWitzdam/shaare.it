---
title: "requests.exceptions.HTTPError: 500 Internal Server Error"
description: "Handling 500 errors from servers when using Requests and strategies to retry/report."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## HTTPError: 500 Internal Server Error

```bash
$ python -c "import requests; r = requests.get('https://httpbin.org/status/500'); r.raise_for_status()"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 500 Server Error: INTERNAL SERVER ERROR for url
```

### Why this happens

Server-side failure.

### Fix

Retry with backoff or contact server owner; verify request correctness.

#### Wrong code

```python
import requests
requests.get('https://httpbin.org/status/500').raise_for_status()
```

#### Fixed code

```python
import requests
try:
    r = requests.get('https://httpbin.org/status/500', timeout=5)
    r.raise_for_status()
except requests.exceptions.HTTPError:
    print('Server error, retry later')
```
