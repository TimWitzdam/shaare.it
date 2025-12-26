---
title: "Cookie domain/path mismatch in Requests"
description: "Cookies not being sent due to domain or path mismatch when using Python Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Cookie domain/path mismatch

```bash
$ python -c "import requests; s=requests.Session(); s.cookies.set('sid','123',domain='api.example.com',path='/'); print(s.get('https://www.example.com/').request.headers.get('Cookie'))"
None
```

### Why this happens

Cookies are scoped by domain and path. If the cookie's domain/path doesn't match the request URL, the cookie won't be sent.

### Fix

Set cookies with a domain/path that matches the target host and route, or let the server set cookies via Set-Cookie. Avoid manually forcing mismatched domains.

#### Wrong code

```python
import requests
s = requests.Session()
s.cookies.set('sid', '123', domain='api.example.com', path='/')
# Request goes to different domain
r = s.get('https://www.example.com/')
print(r.request.headers.get('Cookie'))  # None
```

#### Fixed code

```python
import requests
s = requests.Session()
# Match the target domain
s.cookies.set('sid', '123', domain='www.example.com', path='/')
r = s.get('https://www.example.com/')
print(r.request.headers.get('Cookie'))  # sid=123
```

#### Better: let server set

```python
import requests
s = requests.Session()
s.get('https://www.example.com/login')  # server sets Set-Cookie
resp = s.get('https://www.example.com/profile')
print('Cookie present?', 'Cookie' in resp.request.headers)
```
