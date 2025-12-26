---
title: "requests.exceptions.SSLError: SNI-related TLS handshake failure"
description: "SNI issues in TLS handshakes via Requests and using correct hostnames/ciphers."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## SSLError: SNI handshake failure

```bash
$ python -c "import requests; requests.get('https://ip-address-only')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: TLS handshake failed due to SNI
```

### Why this happens

Connecting by IP to virtual hosts can fail SNI hostname checks.

### Fix

Use the proper hostname (not bare IP) or configure SNI/certs correctly.

#### Wrong code

```python
import requests
requests.get('https://203.0.113.1')
```

#### Fixed code

```python
import requests
requests.get('https://api.example.com')
```
