---
title: "OAuth2 Refresh Token Invalid"
description: "Refreshing access tokens fails due to invalid or expired refresh token when using Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## OAuth2 refresh token invalid

```bash
$ python -c "import requests; requests.post('https://idp.example.com/token', data={'grant_type':'refresh_token','refresh_token':'bad'})"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 400 Client Error: Bad Request
```

### Why this happens

Refresh tokens expire or get revoked; wrong client_id/secret also fail.

### Fix

Re-authenticate to obtain new tokens; store securely and rotate.

#### Wrong code

```python
import requests
requests.post('https://idp.example.com/token', data={'grant_type':'refresh_token','refresh_token':'bad'})
```

#### Fixed code

```python
import requests
resp = requests.post('https://idp.example.com/token', data={
    'grant_type': 'refresh_token',
    'refresh_token': 'valid'
}, timeout=10)
access = resp.json()['access_token']
```
