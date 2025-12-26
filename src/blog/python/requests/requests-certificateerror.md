---
title: "ssl.CertificateError: Hostname mismatch"
description: "Certificate hostname mismatch errors in Requests and how to resolve them safely."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## CertificateError: Hostname mismatch

```bash
$ python -c "import ssl; raise ssl.CertificateError('hostname mismatch')"
Traceback (most recent call last):
  ...
ssl.CertificateError: hostname mismatch
```

### Why this happens

The certificate's CN/SAN doesn't match the requested hostname.

### Fix

Use the correct hostname or a certificate with the proper SANs.

#### Wrong code

```python
import requests
requests.get('https://api.internal', headers={'Host': 'wrong.example.com'})
```

#### Fixed code

```python
import requests
resp = requests.get('https://api.internal')  # matches cert
print(resp.ok)
```
