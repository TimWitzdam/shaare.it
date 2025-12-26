---
title: "Certificate revoked"
description: "Client rejects server certificate due to revocation (OCSP/CRL)."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Certificate revoked

```bash
$ python -c "import requests; requests.get('https://revoked.example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: certificate revoked
```

### Why this happens

OCSP/CRL checks indicate the certificate is revoked.

### Fix

- Replace the server certificate; ensure it’s valid and not revoked.

#### Wrong code

```python
import requests
requests.get("https://revoked.example.com")
```

#### Fixed code

```python
import requests
resp = requests.get("https://valid.example.com")
print(resp.ok)
```
