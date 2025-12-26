---
title: "Client TLS Certificate Missing"
description: "Mutual TLS endpoints require a client certificate; missing cert causes handshake failure in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Client TLS certificate missing

```bash
$ python -c "import requests; requests.get('https://mtls.example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: handshake failure: client certificate required
```

### Why this happens

Server enforces mutual TLS; client must present a cert.

### Fix

Supply cert and key via cert=('cert.pem','key.pem') or a combined .pem.

#### Wrong code

```python
import requests
requests.get('https://mtls.example.com')
```

#### Fixed code

```python
import requests
requests.get('https://mtls.example.com', cert=('client.crt','client.key'), timeout=10)
```
