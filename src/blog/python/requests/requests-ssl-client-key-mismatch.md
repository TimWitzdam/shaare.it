---
title: "Client Key/Certificate Mismatch"
description: "Private key does not match the provided certificate causing SSL handshake errors in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Client key/cert mismatch

```bash
$ python -c "import requests; requests.get('https://mtls.example.com', cert=('wrong.crt','wrong.key'))"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: key values mismatch
```

### Why this happens

Certificate and key must correspond; otherwise OpenSSL rejects.

### Fix

Use matching cert/key pair; verify with openssl x509 -noout -modulus and rsa -noout -modulus.

#### Wrong code

```python
import requests
requests.get('https://mtls.example.com', cert=('a.crt','b.key'))
```

#### Fixed code

```python
import requests
requests.get('https://mtls.example.com', cert=('client.crt','client.key'), timeout=10)
```
