---
title: "requests.exceptions.SSLError: wrong version number"
description: "TLS protocol version mismatch in Requests and configuring compatible versions."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## SSLError: wrong version number

```bash
$ python -c "import requests; requests.get('https://legacy.tls.server')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: [SSL: WRONG_VERSION_NUMBER] wrong version number
```

### Why this happens

Client/server TLS versions/ciphers are incompatible.

### Fix

Upgrade server TLS, use proper port (avoid HTTPS on HTTP port), or ensure modern ciphers.

#### Wrong code

```python
import requests
requests.get('https://example.com:80')  # HTTPS on HTTP port
```

#### Fixed code

```python
import requests
requests.get('http://example.com:80')
```
