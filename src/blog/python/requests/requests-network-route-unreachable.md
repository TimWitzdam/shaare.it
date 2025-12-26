---
title: "No Route to Host"
description: "Network unreachable errors when routing to the target host fails while using Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## No route to host

```bash
$ python -c "import requests; requests.get('http://10.255.255.1')"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectionError: Network is unreachable
```

### Why this happens

Host is unreachable due to routing rules, VPN, firewall, or wrong subnet.

### Fix

Verify network path, ping/traceroute, and firewall settings.

#### Wrong code

```python
import requests
requests.get('http://10.255.255.1')
```

#### Fixed code

```python
import requests
requests.get('http://10.0.0.5', timeout=5)
```
