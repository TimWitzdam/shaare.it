---
title: "HTTP 413 Payload Too Large: Request body exceeds server limits"
description: "Avoiding HTTP 413 in Requests by chunking uploads and configuring server limits."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## 413 Payload Too Large

```bash
$ python -c "import requests; requests.post('https://example.com/upload', data=b'x'*100_000_000)"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 413 Client Error: Payload Too Large for url: https://example.com/upload
```

### Why this happens

Request body exceeds server-configured size limits.

### Fix

Chunk the upload, compress data, or increase server limits.

#### Wrong code

```python
import requests
requests.post('https://example.com/upload', data=b'x'*200_000_000)
```

#### Fixed code

```python
import requests

def gen():
    chunk = b'x'*8192
    for _ in range(10000):
        yield chunk

resp = requests.post('https://example.com/upload', data=gen())
print(resp.status_code)
```
