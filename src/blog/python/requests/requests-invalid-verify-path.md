---
title: "Invalid verify path"
description: "Providing a wrong CA bundle path to `verify=` breaks SSL verification."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid verify path

```bash
$ python -c "import requests; requests.get('https://example.com', verify='/bad/path/ca.pem')"
Traceback (most recent call last):
  ...
requests.exceptions.SSLError: Could not find a suitable TLS CA certificate bundle
```

### Why this happens

The specified CA file does not exist or is not a valid bundle.

### Fix

- Provide the correct path or leave `verify=True` to use system certs.

#### Wrong code

```python
import requests
requests.get("https://example.com", verify="/wrong/ca.pem")
```

#### Fixed code

```python
import requests
# Use system default certs
resp = requests.get("https://example.com")
print(resp.status_code)
# Or provide a valid path
resp = requests.get("https://internal.example", verify="/etc/ssl/certs/internal-ca.pem")
print(resp.ok)
```
