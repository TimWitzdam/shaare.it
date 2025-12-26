---
title: "Invalid proxy credentials"
description: "Proxy authentication fails due to wrong username/password."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid proxy credentials

```bash
$ python -c "import requests; requests.get('https://example.com', proxies={'https':'http://bad:creds@proxy:8080'})"
Traceback (most recent call last):
  ...
requests.exceptions.ProxyError: 407 Proxy Authentication Required
```

### Why this happens

Wrong credentials or missing auth to the proxy.

### Fix

- Use correct credentials and scheme.

#### Wrong code

```python
import requests
proxies = {"https": "http://bad:creds@proxy.example:8080"}
requests.get("https://example.com", proxies=proxies)
```

#### Fixed code

```python
import requests
proxies = {"https": "http://user:password@proxy.example:8080"}
resp = requests.get("https://example.com", proxies=proxies)
print(resp.status_code)
```
