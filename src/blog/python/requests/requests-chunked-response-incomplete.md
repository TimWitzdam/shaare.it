---
title: "Chunked response incomplete"
description: "Server closes connection before sending all chunks; client sees truncated body."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Chunked response incomplete

```bash
$ python -c "import requests; requests.get('http://flaky.example.com/stream', stream=True).iter_content().__next__()"
Traceback (most recent call last):
  ...
urllib3.exceptions.ProtocolError: ('Connection aborted.', ConnectionResetError(...))
```

### Why this happens

Server drops the connection mid-stream or sends malformed termination chunk.

### Fix

- Retry the request or support resumable downloads.

#### Wrong code

```python
import requests
resp = requests.get("http://flaky.example.com/stream", stream=True)
for chunk in resp.iter_content(1024):
    pass  # fails midway
```

#### Fixed code

```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
session.mount("http://", HTTPAdapter(max_retries=Retry(total=3, backoff_factor=0.5)))
resp = session.get("http://stable.example.com/stream", stream=True)
for chunk in resp.iter_content(1024):
    # process chunks with retry on failure
    pass
```
