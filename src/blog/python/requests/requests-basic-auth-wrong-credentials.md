---
title: "Basic Auth Wrong Credentials"
description: "401 Unauthorized when Basic Auth username/password are incorrect."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Basic Auth wrong credentials

```bash
$ python -c "import requests; requests.get('https://httpbin.org/basic-auth/user/pass', auth=('user','wrong'))"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 401 Client Error: Unauthorized for url
```

### Why this happens

The server validates credentials; wrong username/password cause 401.

### Fix

Verify credentials, rotate passwords, and avoid hard-coding. Use env vars or secret managers.

#### Wrong code

```python
import requests
requests.get('https://service/auth', auth=('user','wrong'))
```

#### Fixed code

```python
import os, requests
user = os.getenv('API_USER')
pwd = os.getenv('API_PASS')
requests.get('https://service/auth', auth=(user, pwd), timeout=10)
```
