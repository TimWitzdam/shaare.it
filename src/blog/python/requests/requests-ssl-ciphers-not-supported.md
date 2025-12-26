---
title: "Cipher Suites Not Supported"
description: "Server requires specific cipher suites not negotiated by client, leading to SSL errors in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Cipher suites not supported

```bash
$ python -c "import requests; requests.get('https://legacy.example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: handshake failure
```

### Why this happens

Server only supports legacy ciphers; client defaults reject or cannot negotiate.

### Fix

Upgrade server; or provide custom SSLContext with compatible ciphers (risk). Prefer updating OpenSSL/Python.

#### Wrong code

```python
import requests
requests.get('https://legacy.example.com')
```

#### Fixed code

```python
import ssl, requests
ctx = ssl.create_default_context()
ctx.set_ciphers('ECDHE+AESGCM')  # example
requests.get('https://legacy.example.com', timeout=10, verify=True)
```
