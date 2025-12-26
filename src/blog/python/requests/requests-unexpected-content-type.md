---
title: "Unexpected Content-Type"
description: "Client expects JSON but server responds with text/html or another type."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Unexpected Content-Type

```bash
$ python -c "import requests; r=requests.get('https://example.com/json'); print(r.headers.get('Content-Type'))"
text/html; charset=utf-8
```

### Why this happens

Wrong endpoint or negotiation; server returns HTML instead of JSON.

### Fix

- Use correct URL or set `Accept: application/json` header.

#### Wrong code

```python
import requests
r = requests.get("https://example.com/json")
r.json()  # raises JSONDecodeError
```

#### Fixed code

```python
import requests
r = requests.get("https://api.example.com/data", headers={"Accept": "application/json"})
print(r.headers.get("Content-Type"))
print(r.json())
```
