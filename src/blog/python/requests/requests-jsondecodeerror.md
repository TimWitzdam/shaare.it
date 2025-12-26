---
title: "json.decoder.JSONDecodeError: Expecting value when calling response.json()"
description: "JSON decoding failures in Requests when the response isn't valid JSON."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## JSONDecodeError: Invalid JSON in response

```bash
$ python -c "import requests; r = requests.get('https://httpbin.org/html'); r.json()"
Traceback (most recent call last):
  ...
json.decoder.JSONDecodeError: Expecting value: line 1 column 1 (char 0)
```

### Why this happens

You called `response.json()` on a non-JSON body (HTML, plain text) or malformed JSON.

### Fix

Check `Content-Type` header or use `response.text`/`response.content` for non-JSON. Validate JSON before parsing.

#### Wrong code

```python
import requests
r = requests.get('https://httpbin.org/html')
data = r.json()
```

#### Fixed code

```python
import requests
r = requests.get('https://httpbin.org/json')
if 'application/json' in r.headers.get('Content-Type', ''):
    data = r.json()
    print(list(data.keys()))
else:
    print(r.text)
```
