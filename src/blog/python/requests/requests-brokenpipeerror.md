---
title: "BrokenPipeError: Pipe broken during streaming upload"
description: "BrokenPipeError on large uploads with Requests and how to handle streaming properly."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## BrokenPipeError: Pipe broken during upload

```bash
$ python -c "import requests, io; requests.post('https://example.com/upload', data=io.BytesIO(b'x'*10_000_000))"
Traceback (most recent call last):
  ...
BrokenPipeError: [Errno 32] Broken pipe
```

### Why this happens

Server closes connection mid-upload or the client sends data faster than server can handle.

### Fix

Use smaller chunks, timeouts, and retry logic. Consider `stream=True` or chunked transfer with generators.

#### Wrong code

```python
import requests
requests.post('https://example.com/upload', data=b'x'*100_000_000)
```

#### Fixed code

```python
import requests

def gen():
    chunk = b'x'*8192
    for _ in range(10000):
        yield chunk

resp = requests.post('https://example.com/upload', data=gen(), timeout=(3, 30))
print(resp.status_code)
```
