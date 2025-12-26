---
title: "TypeError: cookies must be dict or CookieJar"
description: "TypeError when passing cookies to Requests and the supported types for cookies argument."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## TypeError: Invalid cookies type

```bash
$ python -c "import requests; requests.get('https://example.com', cookies='session=abc')"
Traceback (most recent call last):
  ...
TypeError: cookies must be a dict or CookieJar
```

### Why this happens

`cookies` expects dict or CookieJar.

### Fix

Pass a dict or use a session with cookie jar.

#### Wrong code

```python
import requests
requests.get('https://example.com', cookies=object())
```

#### Fixed code

```python
import requests
requests.get('https://example.com', cookies={'session': 'abc'})
```
