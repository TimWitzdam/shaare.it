---
title: "raise_for_status() Exceptions"
description: "Using raise_for_status() raises HTTPError for 4xx/5xx responses in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## raise_for_status exceptions

```bash
$ python -c "import requests; r=requests.get('https://httpbin.org/status/500'); r.raise_for_status()"
Traceback (most recent call last):
  ...
requests.exceptions.HTTPError: 500 Server Error
```

### Why this happens

raise_for_status() checks status codes and raises HTTPError for errors.

### Fix

Wrap in try/except; inspect response before calling; only raise when desired.

#### Wrong code

```python
import requests
requests.get('https://example.com/error').raise_for_status()
```

#### Fixed code

```python
import requests
r = requests.get('https://example.com/error', timeout=10)
if r.ok:
    process(r.json())
else:
    log_error(r.status_code, r.text)
```
