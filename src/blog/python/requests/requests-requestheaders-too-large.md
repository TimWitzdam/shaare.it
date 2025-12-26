---
title: "Request Headers Too Large"
description: "Servers reject requests with oversized headers (URI/headers length limits) in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Request headers too large

```bash
$ python -c "import requests; requests.get('https://example.com', headers={'X-Big':'a'*100000})"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 431 Client Error: Request Header Fields Too Large
```

### Why this happens

Servers enforce max header sizes.

### Fix

Trim headers; avoid huge cookies and user agents.

#### Wrong code

```python
import requests
requests.get('https://example.com', headers={'Cookie':'a='+'x'*50000})
```

#### Fixed code

```python
import requests
requests.get('https://example.com', headers={'Cookie':'session=abc'}, timeout=10)
```
