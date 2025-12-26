---
title: "Authorization Header Missing"
description: "401 Unauthorized due to missing Authorization header in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Authorization header missing

```bash
$ python -c "import requests; requests.get('https://api.example.com/secure')"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 401 Client Error: Unauthorized for url
```

### Why this happens

Protected endpoints require Authorization (Bearer/Basic). Without it, servers return 401.

### Fix

Add the appropriate Authorization header or use Requests helpers (auth= for Basic/HTTPDigest, headers for Bearer).

#### Wrong code

```python
import requests
requests.get('https://api.example.com/secure')
```

#### Fixed code

```python
import requests
headers = {"Authorization": "Bearer YOUR_TOKEN"}
requests.get('https://api.example.com/secure', headers=headers, timeout=10)
```
