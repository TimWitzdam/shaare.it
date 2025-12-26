---
title: "Unsupported Redirect Protocol"
description: "Redirect points to a protocol unsupported by Requests (e.g., ftp://), causing errors."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Unsupported redirect protocol

```bash
$ python -c "import requests; requests.get('https://example.com/redirect-to-ftp')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidSchema: No connection adapters were found for 'ftp://...'
```

### Why this happens

Redirect Location points to non-http(s) protocol.

### Fix

Handle redirect manually and use appropriate library for target protocol.

#### Wrong code

```python
import requests
requests.get('https://example.com/redirect-to-ftp')
```

#### Fixed code

```python
import requests
r = requests.get('https://example.com/start', allow_redirects=False, timeout=10)
loc = r.headers.get('Location')
if loc and loc.startswith('http'):
    requests.get(loc, timeout=10)
```
