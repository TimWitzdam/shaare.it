---
title: "Weak TLS Protocol Disabled"
description: "Server disables TLS 1.0/1.1 causing failures for old clients; Requests may fail if Python/OpenSSL are outdated."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Weak TLS protocol disabled

```bash
$ python -c "import requests; requests.get('https://modern.example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: wrong version number
```

### Why this happens

Client attempts old TLS versions not supported by server.

### Fix

Upgrade Python/OpenSSL; ensure TLS 1.2+.

#### Wrong code

```python
import requests
requests.get('https://modern.example.com')  # on very old Python
```

#### Fixed code

```python
import requests
requests.get('https://modern.example.com', timeout=10)
```
