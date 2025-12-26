---
title: "SNI Hostname Not Provided"
description: "TLS handshake fails when Server Name Indication (SNI) is missing or mismatched in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## SNI hostname not provided

```bash
$ python -c "import requests; requests.get('https://ip-address-only')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: SSL: CERTIFICATE_VERIFY_FAILED (hostname mismatch)
```

### Why this happens

Connecting via IP without SNI can cause the server to present the wrong certificate.

### Fix

Use the hostname URL; avoid raw IP for HTTPS unless certificate covers it.

#### Wrong code

```python
import requests
requests.get('https://203.0.113.10')
```

#### Fixed code

```python
import requests
requests.get('https://example.com', timeout=10)
```
