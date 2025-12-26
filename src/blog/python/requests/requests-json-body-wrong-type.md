---
title: "JSON Body Wrong Type"
description: "Passing string to json= or dict to data= leads to incorrect encoding in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## JSON body wrong type

```bash
$ python -c "import requests; requests.post('https://api.example.com', json='{"x":1}')"
# Sent as a JSON string; server may double-parse or error
```

### Why this happens

json= expects Python objects (dict/list). Passing a pre-encoded string results in wrong double-encoding.

### Fix

Use json= with dicts; use data= for form bodies.

#### Wrong code

```python
import requests
requests.post('https://api.example.com', json='{"x":1}')
```

#### Fixed code

```python
import requests
requests.post('https://api.example.com', json={'x':1}, timeout=10)
```
