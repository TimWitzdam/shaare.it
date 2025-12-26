---
title: "requests.exceptions.SSLError: Certificate verify failed"
description: "TLS/SSL certificate verification errors in Requests and safe ways to resolve them."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## SSLError: Certificate verify failed

```bash
$ python -c "import requests; requests.get('https://self-signed.badssl.com/')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: HTTPSConnectionPool(host='self-signed.badssl.com', port=443): Max retries exceeded with url: / (Caused by SSLError: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed)
```

### Why this happens

The server's certificate is invalid/self-signed, hostname mismatch, or your CA bundle is outdated.

### Fix

Use a proper certificate, update certifi/CA bundle, or pin a custom CA via `verify='/path/to/ca.pem'`. Avoid `verify=False` except for debugging.

#### Wrong code

```python
import requests
requests.get('https://internal-host')  # self-signed cert
```

#### Fixed code

```python
import requests
resp = requests.get('https://internal-host', verify='/etc/ssl/certs/internal-ca.pem', timeout=5)
print(resp.status_code)
```
