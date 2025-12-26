---
title: "SSLError: hostname mismatch"
description: "The server certificate's hostname doesn't match the requested host."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## SSLError: hostname mismatch

```bash
$ python -c "import requests; requests.get('https://wrong-host.example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: hostname 'wrong-host.example.com' doesn't match 'api.example.com'
```

### Why this happens

You're connecting to a host whose TLS certificate was issued for a different hostname. This can occur with misconfigured servers or when using an IP address or alias not covered by the certificate's SANs.

### Fix

- Use the correct hostname that matches the certificate.
- Fix server configuration to serve a certificate that includes the requested hostname.

#### Wrong code

```python
import requests
# Using an alias not present in the certificate
requests.get("https://alias.example.net")
```

#### Fixed code

```python
import requests
# Use the canonical hostname that the certificate covers
response = requests.get("https://api.example.com")
print(response.ok)
```
