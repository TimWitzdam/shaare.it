---
title: "Streaming Upload Timeout"
description: "Timeouts occur during large streaming uploads using Requests due to server or network limits."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Streaming upload timeout

```bash
$ python -c "import requests, io; data=(b'x'*10_000_000); requests.post('https://example.com/upload', data=io.BytesIO(data), timeout=1)"
Traceback (most recent call last):
  ...
requests.exceptions.Timeout: The request timed out
```

### Why this happens

Server slow or network constrained; client timeout too short.

### Fix

Increase timeouts; use chunked APIs or resumable uploads.

#### Wrong code

```python
import requests, io
requests.post('https://example.com/upload', data=io.BytesIO(b'x'*10_000_000), timeout=1)
```

#### Fixed code

```python
import requests, io
requests.post('https://example.com/upload', data=io.BytesIO(b'x'*10_000_000), timeout=(5, 60))
```
