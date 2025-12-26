---
title: "SSLError: certificate has expired"
description: "TLS handshake fails because the server certificate is past its validity period."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## SSLError: certificate has expired

```bash
$ python -c "import requests; requests.get('https://expired.badssl.com')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: [SSL: CERTIFICATE_VERIFY_FAILED] certificate has expired
```

### Why this happens

The server's TLS certificate expired and cannot be validated. Clients rightly reject expired certificates for security.

### Fix

- Renew the certificate on the server.
- Avoid disabling verification; only for debugging you may use `verify=False` temporarily.

#### Wrong code

```python
import requests
# Forcing disable verification hides the real problem
requests.get("https://service.example.com", verify=False)
```

#### Fixed code

```python
import requests
# Access a server with a valid, renewed certificate
response = requests.get("https://service.example.com")
print(response.status_code)
```
