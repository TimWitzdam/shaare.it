---
title: "Too Many Cookies"
description: "Cookie jar exceeds server or browser-like limits leading to rejection or truncation in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Too many cookies

```bash
$ python -c "import requests; s=requests.Session(); [s.cookies.set(f'c{i}','x') for i in range(1000)]; s.get('https://example.com')"
# Server may reject headers or ignore some cookies
```

### Why this happens

Servers limit header size and cookie count.

### Fix

Prune cookies; only send necessary ones; use domains/paths to scope.

#### Wrong code

```python
import requests
s = requests.Session()
for i in range(1000):
    s.cookies.set(f'c{i}', 'x')
s.get('https://example.com')
```

#### Fixed code

```python
import requests
s = requests.Session()
s.cookies.set('session', 'abc')
s.get('https://example.com', timeout=10)
```
