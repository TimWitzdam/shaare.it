---
title: "Unknown Certificate Authority"
description: "SSL verification fails because the server certificate is signed by an unknown CA in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Unknown certificate authority

```bash
$ python -c "import requests; requests.get('https://selfsigned.example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: CERTIFICATE_VERIFY_FAILED: unable to get local issuer certificate
```

### Why this happens

The certificate chain is not trusted by your CA store.

### Fix

Use a valid CA-signed cert on server, or supply verify path to CA bundle.

#### Wrong code

```python
import requests
requests.get('https://selfsigned.example.com')
```

#### Fixed code

```python
import requests
requests.get('https://selfsigned.example.com', verify='/path/to/ca-bundle.pem', timeout=10)
```
