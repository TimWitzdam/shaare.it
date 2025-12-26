---
title: "DNS Resolution Failure"
description: "Requests fails when the hostname cannot be resolved by DNS (gaierror)."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## DNS resolution failure

```bash
$ python -c "import requests; requests.get('https://nonexistent.example.invalid')"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectionError: DNS resolution failed
```

### Why this happens

Typos, offline DNS, or invalid TLD cause name resolution errors.

### Fix

Check hostname spelling, network, and DNS config; try using the IP address to confirm connectivity.

#### Wrong code

```python
import requests
requests.get('https://exmaple.com')
```

#### Fixed code

```python
import requests
requests.get('https://example.com', timeout=10)
```
