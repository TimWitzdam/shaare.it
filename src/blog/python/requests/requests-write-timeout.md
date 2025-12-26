---
title: "Timeout: The write operation timed out"
description: "Write timeouts when sending data with Requests and how to tune timeouts and chunk sizes."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Timeout: Write operation timed out

```bash
$ python -c "import requests; requests.post('https://example.com/upload', data=b'x'*10_000_000, timeout=(3,0.001))"
Traceback (most recent call last):
  ...
requests.exceptions.Timeout: Write operation timed out
```

### Why this happens

Client cannot send data within the configured write/read timeouts.

### Fix

Increase timeouts and send in smaller chunks.

#### Wrong code

```python
import requests
requests.post('https://example.com/upload', data=b'x'*100_000_000, timeout=1)
```

#### Fixed code

```python
import requests
resp = requests.post('https://example.com/upload', data=b'x'*8192, timeout=(3, 30))
print(resp.status_code)
```
