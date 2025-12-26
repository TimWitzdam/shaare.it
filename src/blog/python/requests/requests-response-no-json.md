---
title: "AttributeError: 'Response' object has no attribute 'json' (shadowing or misuse)"
description: "When Response.json is missing due to object shadowing or incorrect usage in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## AttributeError: Response has no json

```bash
$ python -c "import requests; r = requests.get('https://httpbin.org/json'); r.json = None; r.json()"
Traceback (most recent call last):
  ...
TypeError: 'NoneType' object is not callable
```

### Why this happens

Overwriting `r.json` attribute or using a custom Response class that lacks `json()`.

### Fix

Don't shadow methods; call `r.json()` directly and avoid assigning to `r.json`.

#### Wrong code

```python
import requests
r = requests.get('https://httpbin.org/json')
r.json = {}  # shadowing
data = r.json()
```

#### Fixed code

```python
import requests
r = requests.get('https://httpbin.org/json')
data = r.json()
print(type(data))
```
