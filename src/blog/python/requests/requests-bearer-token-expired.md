---
title: "Bearer Token Expired"
description: "401 Unauthorized due to expired or invalid bearer (JWT) token in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Bearer token expired

```bash
$ python -c "import requests; headers={'Authorization':'Bearer expired'}; requests.get('https://api.example.com/me', headers=headers)"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 401 Client Error: Unauthorized for url
```

### Why this happens

Tokens have lifetimes. Expired or revoked tokens fail authentication.

### Fix

Implement token refresh or re-authenticate. Use short-lived access tokens with refresh tokens.

#### Wrong code

```python
import requests
headers = {"Authorization": "Bearer expired"}
requests.get('https://api.example.com/me', headers=headers)
```

#### Fixed code

```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

# Example refresh logic (pseudo):
access_token = refresh_access_token()
headers = {"Authorization": f"Bearer {access_token}"}
requests.get('https://api.example.com/me', headers=headers, timeout=10)
```
