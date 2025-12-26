---
title: "HTTP Method Not Allowed"
description: "405 Method Not Allowed when using unsupported HTTP methods with Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## HTTP method not allowed

```bash
$ python -c "import requests; requests.delete('https://api.example.com/items')"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 405 Client Error: Method Not Allowed
```

### Why this happens

Endpoint constraints only allow specific methods.

### Fix

Use permitted method per API docs or adjust server config to allow it.

#### Wrong code

```python
import requests
requests.delete('https://api.example.com/items')
```

#### Fixed code

```python
import requests
requests.get('https://api.example.com/items', timeout=10)
```
