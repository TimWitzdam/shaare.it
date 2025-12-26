---
title: "Expected JSON But Got Text"
description: "Calling response.json() fails when server returns non-JSON despite Accept header."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## JSON response expected

```bash
$ python -c "import requests; r=requests.get('https://example.com/text'); r.json()"
Traceback (most recent call last):
  ...
requests.exceptions.JSONDecodeError: Expecting value: line 1 column 1 (char 0)
```

### Why this happens

Server returns text/html; response is not JSON.

### Fix

Check Content-Type header; handle non-JSON paths or add proper Accept header.

#### Wrong code

```python
import requests
r = requests.get('https://example.com/text')
print(r.json())
```

#### Fixed code

```python
import requests
r = requests.get('https://example.com/text', headers={'Accept':'application/json'}, timeout=10)
if 'application/json' in r.headers.get('Content-Type',''):
    data = r.json()
else:
    data = r.text
```
