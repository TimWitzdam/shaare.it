---
title: "Invalid Content/Transfer-Encoding"
description: "Bad Content-Encoding or Transfer-Encoding values cause decoding errors in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid encoding headers

```bash
$ python -c "import requests; r=requests.get('https://example.com'); r.headers['Content-Encoding']='x-bad'; r.text"
Traceback (most recent call last):
  ...
requests.exceptions.ContentDecodingError: Invalid content encoding
```

### Why this happens

Servers may send wrong encoding headers (gzip/deflate) or mixed signals with Transfer-Encoding: chunked.

### Fix

Contact server owners to fix headers, or disable decoding via stream=True and manual handling.

#### Wrong code

```python
import requests
r = requests.get('https://example.com')
print(r.text)  # assumes encoding is correct
```

#### Fixed code

```python
import requests
with requests.get('https://example.com', stream=True, timeout=10) as r:
    r.raw.decode_content = False
    content = r.raw.read()
```
