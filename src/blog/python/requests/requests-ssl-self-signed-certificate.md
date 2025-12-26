---
title: "SSLError: self-signed certificate"
description: "Requests rejects self-signed certificates without a trusted CA."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## SSLError: self-signed certificate

```bash
$ python -c "import requests; requests.get('https://self-signed.example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: [SSL: CERTIFICATE_VERIFY_FAILED] self-signed certificate
```

### Why this happens

The server uses a certificate not signed by a trusted CA. Your client cannot verify the chain.

### Fix

- Use a certificate from a trusted CA.
- Or supply a CA bundle that trusts the server cert: `verify='/path/to/ca.pem'`.

#### Wrong code

```python
import requests
# Blindly disable verification
requests.get("https://internal.example", verify=False)
```

#### Fixed code

```python
import requests
# Provide the internal CA bundle to verify properly
response = requests.get("https://internal.example", verify="/etc/ssl/certs/internal-ca.pem")
print(response.ok)
```
