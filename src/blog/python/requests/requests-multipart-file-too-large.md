---
title: "Multipart File Too Large"
description: "413 Payload Too Large when uploading big files using Requests multipart/form-data."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Multipart file too large

```bash
$ python -c "import requests; files={'file': open('big.bin','rb')}; requests.post('https://example.com/upload', files=files)"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 413 Client Error: Payload Too Large
```

### Why this happens

Server imposes body size limits.

### Fix

Use chunked/upload API, compress, or split files. Consult server limits.

#### Wrong code

```python
import requests
files = {"file": open("big.bin", "rb")}
requests.post('https://example.com/upload', files=files)
```

#### Fixed code

```python
import requests
with open('big.bin','rb') as f:
    requests.post('https://example.com/upload', data={'meta':'x'}, files={'file': f}, timeout=60)
# Or use a server-supported chunked API
```
