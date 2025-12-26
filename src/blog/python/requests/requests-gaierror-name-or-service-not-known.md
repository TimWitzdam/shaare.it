---
title: "socket.gaierror: [Errno -2] Name or service not known"
description: "DNS resolution failed for the host when using Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## socket.gaierror: Name or service not known

```bash
$ python -c "import requests; requests.get('http://nonexistent.domain.example')"
Traceback (most recent call last):
  ...
socket.gaierror: [Errno -2] Name or service not known
```

### Why this happens

The hostname can't be resolved by DNS. Common causes: typos in the domain, DNS server issues, offline network, or using an internal host not reachable from your network.

### Fix

- Verify the domain spelling and that it exists.
- Check your network/DNS configuration (try `nslookup` or `dig`).
- Use the correct fully qualified domain name or an IP address if appropriate.

#### Wrong code

```python
import requests
requests.get("http://my-internal-api")  # missing domain, not resolvable
```

#### Fixed code

```python
import requests
# Use a resolvable hostname or proper FQDN
response = requests.get("https://api.example.com/v1/resource")
print(response.status_code)
```
