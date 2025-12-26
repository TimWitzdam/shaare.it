---
title: "requests.exceptions.ChunkedEncodingError: Incomplete chunked read"
description: "Chunked transfer encoding read errors in Requests streaming responses."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ChunkedEncodingError: Incomplete chunked read

```bash
$ python -c "import requests; r = requests.get('https://example.com/stream', stream=True); next(r.iter_content(1024))"
Traceback (most recent call last):
  ...
requests.exceptions.ChunkedEncodingError: ('Connection broken: IncompleteRead(0 bytes read)', IncompleteRead(0 bytes read))
```

### Why this happens

The server closed the connection mid-stream or sent malformed chunked data.

### Fix

Retry the request, disable streaming to buffer fully, or validate server behavior.

#### Wrong code

```python
import requests
r = requests.get('https://example.com/stream', stream=True)
for chunk in r.iter_content(1024):
    process(chunk)  # assumes full chunks
```

#### Fixed code

```python
import requests
r = requests.get('https://example.com/stream', stream=True, timeout=(3, 15))
for chunk in r.iter_content(1024):
    if chunk:
        process(chunk)
```
