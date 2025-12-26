---
title: "requests.exceptions.SSLError: tlsv1 alert protocol version"
description: "Server rejects TLS protocol version; how to resolve by updating clients/servers."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## SSLError: tlsv1 alert protocol version

```bash
$ python -c "import requests; requests.get('https://tls12-only.example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: tlsv1 alert protocol version
```

### Why this happens

Server requires newer TLS (e.g., TLS 1.2+) than the client supports.

### Fix

Update Python/OpenSSL/Requests stack or use a server that supports the client's TLS.

#### Wrong code

```python
import requests
requests.get('https://tls12-only.example.com')  # with outdated OpenSSL
```

#### Fixed code

```python
import requests
requests.get('https://example.com')  # after updating environment
```
