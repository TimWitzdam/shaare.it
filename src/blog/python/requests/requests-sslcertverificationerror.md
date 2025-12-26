---
title: "ssl.SSLCertVerificationError: Certificate verify failed"
description: "Specific certificate verification failures with Requests and proper remediation."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## SSLCertVerificationError: Certificate verify failed

```bash
$ python -c "import ssl; raise ssl.SSLCertVerificationError('certificate verify failed')"
Traceback (most recent call last):
  ...
ssl.SSLCertVerificationError: certificate verify failed
```

### Why this happens

Invalid/self-signed certificate or missing CA chain.

### Fix

Install correct CA, update certifi, or provide `verify` path; avoid disabling verification.

#### Wrong code

```python
import requests
requests.get('https://internal-host', verify=False)
```

#### Fixed code

```python
import requests
resp = requests.get('https://internal-host', verify='/etc/ssl/certs/internal-ca.pem')
print(resp.ok)
```
