---
title: "requests.exceptions.InvalidChunkLength: Bad chunk length in response"
description: "InvalidChunkLength errors from malformed chunked responses and how to guard against them."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## InvalidChunkLength: Bad chunk length

```bash
$ python -c "import requests; r = requests.get('https://example.com/stream', stream=True); next(r.iter_content(1024))"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidChunkLength: Invalid chunk length
```

### Why this happens

Server sends incorrect chunk sizes or corrupts the chunked transfer encoding.

### Fix

Disable streaming, retry, or fix server chunking.

#### Wrong code

```python
import requests
r = requests.get('https://example.com/stream', stream=True)
for c in r.iter_content(1024):
    process(c)
```

#### Fixed code

```python
import requests
r = requests.get('https://example.com/stream', stream=True, timeout=(3, 15))
for c in r.iter_content(1024):
    if not c:
        break
```
