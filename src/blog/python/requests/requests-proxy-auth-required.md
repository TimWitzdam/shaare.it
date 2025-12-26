---
title: "Proxy Authentication Required (407)"
description: "Requests through a proxy fail with 407 when credentials are missing or wrong."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Proxy authentication required

```bash
$ python -c "import requests; requests.get('https://example.com', proxies={'http':'http://proxy:3128'})"
Traceback (most recent call last):
  ...
requests.exceptions.ProxyError: 407 Proxy Authentication Required
```

### Why this happens

The proxy demands credentials; none provided or incorrect.

### Fix

Include username:password in proxy URL or use the proxies dict with auth.

#### Wrong code

```python
import requests
requests.get('https://example.com', proxies={'http':'http://proxy:3128'})
```

#### Fixed code

```python
import requests
proxies = {
  'http': 'http://user:pass@proxy:3128',
  'https': 'http://user:pass@proxy:3128'
}
requests.get('https://example.com', proxies=proxies, timeout=10)
```
