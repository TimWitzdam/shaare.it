---
title: "requests.exceptions.InvalidProxyURL: Could not parse proxy URL"
description: "Proxy parsing failures in Requests and how to construct valid proxy URLs."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## InvalidProxyURL: Could not parse proxy URL

```bash
$ python -c "import requests; requests.get('https://example.com', proxies={'http': 'user:pass@host:port'})"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidProxyURL: Please check proxy URL formatting
```

### Why this happens

Missing scheme or malformed credentials.

### Fix

Include scheme and properly encoded credentials.

#### Wrong code

```python
import requests
proxies = {"http": "user:pass@proxy.local:3128"}
requests.get('https://example.com', proxies=proxies)
```

#### Fixed code

```python
import requests
proxies = {"http": "http://user:pass@proxy.local:3128"}
requests.get('https://example.com', proxies=proxies)
```
