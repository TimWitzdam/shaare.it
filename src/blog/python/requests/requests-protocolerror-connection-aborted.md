---
title: "urllib3.exceptions.ProtocolError: ('Connection aborted.', BrokenPipeError)"
description: "ProtocolError bubbling into Requests due to aborted connections and how to handle retries/chunking."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ProtocolError: Connection aborted

```bash
$ python -c "import requests; requests.post('https://example.com/upload', data=b'x'*100_000_000)"
Traceback (most recent call last):
  ...
urllib3.exceptions.ProtocolError: ('Connection aborted.', BrokenPipeError(32, 'Broken pipe'))
```

### Why this happens

Server aborted the connection during upload or network middleboxes interrupted the stream.

### Fix

Retry with backoff, send smaller chunks, and verify server limits.

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

resp = requests.post('https://example.com/upload', data=gen(), timeout=(3, 30))
print(resp.status_code)
```
