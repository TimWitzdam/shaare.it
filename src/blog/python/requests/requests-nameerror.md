---
title: "NameError: name 'requests' is not defined"
description: "NameError when using Requests without importing it correctly."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## NameError: requests is not defined

```bash
$ python -c "requests.get('https://example.com')"
Traceback (most recent call last):
  ...
NameError: name 'requests' is not defined
```

### Why this happens

You didn't import `requests` before using it.

### Fix

`import requests` before calls.

#### Wrong code

```python
# missing import
requests.get('https://example.com')
```

#### Fixed code

```python
import requests
resp = requests.get('https://example.com')
print(resp.status_code)
```
