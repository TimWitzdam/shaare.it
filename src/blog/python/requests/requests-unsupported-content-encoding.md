---
title: "Unsupported Content-Encoding"
description: "Server sends Content-Encoding not supported by client, causing decode errors in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Unsupported Content-Encoding

```bash
$ python -c "import requests; r=requests.get('https://example.com'); r.headers['Content-Encoding']='br'; r.text"
Traceback (most recent call last):
  ...
requests.exceptions.ContentDecodingError: Unsupported content encoding
```

### Why this happens

Client cannot decode brotli or custom encodings without extra libs.

### Fix

Install brotli support or disable decoding and handle raw bytes.

#### Wrong code

```python
import requests
r = requests.get('https://example.com')
print(r.text)
```

#### Fixed code

```python
import requests
with requests.get('https://example.com', stream=True, timeout=10) as r:
    r.raw.decode_content = False
    raw = r.raw.read()
```
