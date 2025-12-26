---
title: "JSON Content-Type Header Mismatch"
description: "Server expects application/json but header/body mismatch causes errors in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## JSON Content-Type mismatch

```bash
$ python -c "import requests; requests.post('https://api.example.com/items', headers={'Content-Type':'application/json'}, data='x=1')"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 400 Client Error: Bad Request
```

### Why this happens

Content-Type claims JSON but the body is form/text. Servers fail to parse.

### Fix

Send JSON with json= or adjust Content-Type to match body.

#### Wrong code

```python
import requests
requests.post('https://api.example.com/items', headers={'Content-Type': 'application/json'}, data='x=1')
```

#### Fixed code

```python
import requests
requests.post('https://api.example.com/items', json={'x': 1}, timeout=10)
```
