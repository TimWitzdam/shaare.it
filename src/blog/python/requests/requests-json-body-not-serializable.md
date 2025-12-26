---
title: "JSON Body Not Serializable"
description: "TypeError when passing non-serializable Python objects to json= in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## JSON body not serializable

```bash
$ python -c "import requests, datetime as dt; requests.post('https://api.example.com', json={'ts': dt.datetime.now()})"
Traceback (most recent call last):
  ...
TypeError: Object of type datetime is not JSON serializable
```

### Why this happens

json= uses json.dumps under the hood; unsupported types cannot be encoded.

### Fix

Convert to supported types (str, int). Serialize datetimes as ISO strings.

#### Wrong code

```python
import requests, datetime as dt
requests.post('https://api.example.com', json={'ts': dt.datetime.now()})
```

#### Fixed code

```python
import requests, datetime as dt
payload = {'ts': dt.datetime.now().isoformat()}
requests.post('https://api.example.com', json=payload, timeout=10)
```
