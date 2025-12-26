---
title: "requests.exceptions.InvalidProxyURL: Could not parse proxy URL"
description: "InvalidProxyURL errors due to malformed proxy strings and how to correct them."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## InvalidProxyURL: Could not parse proxy URL

```bash
$ python -c "import requests; requests.get('https://example.com', proxies={'http': 'badproxy'})"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidProxyURL: Please check proxy URL formatting
```

### Why this happens

Proxy string lacks scheme/host/port or includes invalid characters.

### Fix

Use a properly formatted proxy URL.

#### Wrong code

```python
import requests
proxies = {"https": "proxy.local"}
requests.get('https://example.com', proxies=proxies)
```

#### Fixed code

```python
import requests
proxies = {"https": "http://proxy.local:3128"}
resp = requests.get('https://example.com', proxies=proxies)
print(resp.ok)
```
