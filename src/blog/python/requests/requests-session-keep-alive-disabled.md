---
title: "Session Keep-Alive Disabled"
description: "Requests Session not reusing connections due to headers or adapter settings, hurting performance."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Session keep-alive disabled

```bash
$ python -c "import requests; s=requests.Session(); s.headers['Connection']='close'; s.get('https://example.com'); s.get('https://example.com')"
# Opens new connection each time
```

### Why this happens

Connection: close disables keep-alive; custom adapters may not pool.

### Fix

Remove Connection: close; rely on default pooling.

#### Wrong code

```python
import requests
s = requests.Session()
s.headers['Connection'] = 'close'
s.get('https://example.com')
```

#### Fixed code

```python
import requests
s = requests.Session()
s.headers.pop('Connection', None)
s.get('https://example.com', timeout=10)
```
