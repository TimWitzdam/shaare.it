---
title: "Multipart Missing Filename"
description: "Servers expect a filename in multipart; omission leads to validation errors."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Multipart missing filename

```bash
$ python -c "import requests, io; f=io.BytesIO(b'data'); requests.post('https://example.com/upload', files={'file':('','data')})"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 400 Client Error: Bad Request
```

### Why this happens

Servers validate Content-Disposition; missing filename violates rules.

### Fix

Provide a non-empty filename tuple: (name, fileobj, content_type).

#### Wrong code

```python
import io, requests
f = io.BytesIO(b'data')
requests.post('https://example.com/upload', files={'file': ('', f)})
```

#### Fixed code

```python
import io, requests
f = io.BytesIO(b'data')
requests.post('https://example.com/upload', files={'file': ('data.bin', f, 'application/octet-stream')}, timeout=30)
```
