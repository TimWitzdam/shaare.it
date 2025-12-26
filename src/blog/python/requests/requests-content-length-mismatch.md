---
title: "Content-Length mismatch"
description: "Declared Content-Length doesn't match actual payload size."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Content-Length mismatch

```bash
$ python -c "import requests; requests.get('http://badlength.example.com').content"
Traceback (most recent call last):
  ...
urllib3.exceptions.ProtocolError: ('Connection aborted.', ContentDecodingError('Content-Length mismatch'))
```

### Why this happens

Servers sending an incorrect `Content-Length` header lead to truncated or overlong reads, causing decoding errors.

### Fix

- Fix server to send correct `Content-Length` or use `Transfer-Encoding: chunked`.
- As a client, retry the request or fall back to streaming and manual reads.

#### Wrong code

```python
import requests
# Assumes server length is correct
data = requests.get("http://badlength.example.com").content
```

#### Fixed code

```python
import requests
# Retry strategy and validation
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
session.mount("http://", HTTPAdapter(max_retries=Retry(total=3, backoff_factor=0.2)))
resp = session.get("http://good.example.com")
print(resp.headers.get("Content-Length"))
print(len(resp.content))
```
