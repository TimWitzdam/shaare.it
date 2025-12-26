---
title: "Chunked upload aborted"
description: "Streaming upload interrupted causing server to close connection prematurely."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Chunked upload aborted

```bash
$ python -c "import requests; requests.post('http://flaky.example.com/upload', data=(b'x'*10**8), stream=True)"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectionError: ('Connection aborted.', BrokenPipeError(...))
```

### Why this happens

Server closes connection during upload due to limits or network issues.

### Fix

- Retry uploads and implement resumable protocols; reduce chunk size.

#### Wrong code

```python
import requests
requests.post("http://flaky.example.com/upload", data=open("big.bin", "rb"))
```

#### Fixed code

```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
session.mount("http://", HTTPAdapter(max_retries=Retry(total=3, backoff_factor=0.5)))
with open("big.bin", "rb") as f:
    resp = session.post("http://stable.example.com/upload", data=f)
print(resp.ok)
```
