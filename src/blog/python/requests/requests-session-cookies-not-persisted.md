---
title: "Session Cookies Not Persisted"
description: "Cookies not saved across requests due to new Session each time or wrong domain/path in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Session cookies not persisted

```bash
$ python -c "import requests; s=requests.Session(); s.get('https://example.com/login'); requests.get('https://example.com/profile')"
# Cookie set on s is not used by the second call
```

### Why this happens

Using a new top-level requests.get instead of the Session breaks persistence.

### Fix

Use the same Session instance across calls.

#### Wrong code

```python
import requests
s = requests.Session()
s.get('https://example.com/login')
requests.get('https://example.com/profile')
```

#### Fixed code

```python
import requests
s = requests.Session()
s.get('https://example.com/login')
s.get('https://example.com/profile', timeout=10)
```
