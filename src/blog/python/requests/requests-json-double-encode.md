---
title: "Double-encoding JSON payloads in Requests"
description: "Passing a JSON string to json= leads to double-encoding and server parsing errors."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Double-encoding JSON payloads

```bash
$ python -c "import requests, json; payload=json.dumps({'a':1}); r=requests.post('https://api.example.com', json=payload); print(r.request.body)"
"{\"a\": 1}"
```

### Why this happens

`json=` expects a Python dict/list. If you pass a JSON-formatted string, Requests serializes it again, resulting in an extra layer of quotes and escapes.

### Fix

Pass native Python objects to `json=`, or use `data=` if you already serialized to a string and set the header accordingly.

#### Wrong code

```python
import requests, json
payload = json.dumps({'a': 1})
r = requests.post('https://api.example.com/endpoint', json=payload)
```

#### Fixed code (use dict)

```python
import requests
payload = {'a': 1}
r = requests.post('https://api.example.com/endpoint', json=payload, timeout=10)
r.raise_for_status()
print(r.json())
```

#### Alternative (use data)

```python
import requests, json
payload = json.dumps({'a': 1})
headers = {'Content-Type': 'application/json'}
r = requests.post('https://api.example.com/endpoint', data=payload, headers=headers)
print(r.status_code)
```
