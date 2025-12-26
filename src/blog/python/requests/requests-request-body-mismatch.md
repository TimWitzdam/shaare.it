---
title: "Request Body Length Mismatch"
description: "Content-Length header doesn't match body size causing server errors in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Content-Length/body mismatch

```bash
$ python -c "import requests; requests.post('https://example.com/upload', headers={'Content-Length':'10'}, data='abc')"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 400 Client Error: Bad Request
```

### Why this happens

Manually setting Content-Length incorrectly breaks HTTP framing.

### Fix

Let Requests set Content-Length; avoid manual header unless you know exact size.

#### Wrong code

```python
import requests
requests.post('https://example.com/upload', headers={'Content-Length':'10'}, data='abc')
```

#### Fixed code

```python
import requests
requests.post('https://example.com/upload', data='abc', timeout=10)
```
