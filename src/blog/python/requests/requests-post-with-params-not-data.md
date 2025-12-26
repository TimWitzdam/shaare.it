---
title: "POST With params Instead of data/json"
description: "Using params for POST bodies causes servers to ignore payload in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## POST with params instead of data/json

```bash
$ python -c "import requests; requests.post('https://api.example.com/items', params={'x':1})"
# Server receives no body; may reject
```

### Why this happens

params adds query string, not body.

### Fix

Use data= or json= for request body.

#### Wrong code

```python
import requests
requests.post('https://api.example.com/items', params={'x':1})
```

#### Fixed code

```python
import requests
requests.post('https://api.example.com/items', json={'x':1}, timeout=10)
```
