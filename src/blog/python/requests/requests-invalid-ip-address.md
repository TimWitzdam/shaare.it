---
title: "Invalid IP Address in URL"
description: "Malformed IPv4/IPv6 literals in URLs cause parsing or connection errors in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid IP address

```bash
$ python -c "import requests; requests.get('http://999.999.999.999')"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectionError: Failed to establish a new connection
```

### Why this happens

IP addresses must be valid. Wrong literals or missing brackets around IPv6 addresses cause errors.

### Fix

Use valid IPs and bracket IPv6: http://[2001:db8::1]/.

#### Wrong code

```python
import requests
requests.get('http://2001:db8::1')  # missing brackets
```

#### Fixed code

```python
import requests
requests.get('http://[2001:db8::1]', timeout=10)
```
