---
title: "Bad proxy URL format in Requests"
description: "Malformed proxy URL strings cause errors when configuring proxies in Python Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Bad proxy URL format

```bash
$ python -c "import requests; requests.get('https://example.com', proxies={'http': 'http//proxy:8080'})"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
requests.exceptions.ProxyError: Failed to parse: http//proxy:8080
```

### Why this happens

Proxy URLs must include a valid scheme (http, https, socks5) and proper syntax. Missing colon after scheme, missing credentials delimiter, or absent host/port causes parsing errors.

### Fix

Provide a correctly formatted proxy URL. Use scheme://host:port and include credentials as user:pass@ when needed.

#### Wrong code

```python
import requests
proxies = {
    'http': 'http//proxy:8080',  # missing ':' after 'http'
}
requests.get('https://example.com', proxies=proxies)
```

#### Fixed code

```python
import requests
proxies = {
    'http': 'http://proxy.local:8080',
    'https': 'http://proxy.local:8080',
}
resp = requests.get('https://example.com', proxies=proxies, timeout=5)
print(resp.status_code)
```

#### With credentials and SOCKS

```python
import requests
proxies = {
    'http': 'socks5://user:pass@proxy.local:1080',
    'https': 'socks5://user:pass@proxy.local:1080',
}
resp = requests.get('https://example.com', proxies=proxies)
print(resp.ok)
```
