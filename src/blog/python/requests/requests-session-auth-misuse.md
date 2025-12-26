---
title: "Session.auth Misuse"
description: "Using a callable or wrong tuple for Session.auth causes authentication errors in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Session.auth misuse

```bash
$ python -c "import requests; s=requests.Session(); s.auth='wrong'; s.get('https://example.com')"
Traceback (most recent call last):
  ...
TypeError: auth must be a tuple or requests.auth.AuthBase
```

### Why this happens

Session.auth expects (user, pass) or AuthBase subclass.

### Fix

Provide proper credentials or custom auth object.

#### Wrong code

```python
import requests
s = requests.Session()
s.auth = 'wrong'
s.get('https://example.com')
```

#### Fixed code

```python
import requests
s = requests.Session()
s.auth = ('user', 'pass')
s.get('https://example.com', timeout=10)
```
