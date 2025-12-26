---
title: "Invalid or Blocked User-Agent"
description: "Servers may reject requests with malformed or default User-Agent strings."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid/blocked User-Agent

```bash
$ python -c "import requests; requests.get('https://example.com', headers={'User-Agent':' '})"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 400 Client Error: Bad Request
```

### Why this happens

Some servers block empty or default python-requests UA strings.

### Fix

Set a meaningful UA that identifies your app and contact info if needed.

#### Wrong code

```python
import requests
requests.get('https://example.com', headers={'User-Agent': ''})
```

#### Fixed code

```python
import requests
ua = 'myapp/1.0 (+https://example.com/contact)'
requests.get('https://example.com', headers={'User-Agent': ua}, timeout=10)
```
