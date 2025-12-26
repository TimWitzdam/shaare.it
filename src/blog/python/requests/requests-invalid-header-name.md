---
title: "ValueError: Invalid header name"
description: "Invalid HTTP header names in Requests and how to correct them."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## ValueError: Invalid header name

```bash
$ python -c "import requests; requests.get('https://example.com', headers={'Bad Header': 'x'})"
Traceback (most recent call last):
  ...
ValueError: Invalid header name b'Bad Header'
```

### Why this happens

Header names can't contain spaces or illegal characters.

### Fix

Use valid token characters without spaces.

#### Wrong code

```python
import requests
requests.get('https://example.com', headers={'Content Type': 'json'})
```

#### Fixed code

```python
import requests
requests.get('https://example.com', headers={'Content-Type': 'application/json'})
```
