---
title: "requests.exceptions.RequestException: General request failure"
description: "Catch-all Requests exception and strategies to diagnose failures."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## RequestException: General failure

```bash
$ python -c "import requests; raise requests.exceptions.RequestException('something went wrong')"
Traceback (most recent call last):
  ...
requests.exceptions.RequestException: something went wrong
```

### Why this happens

This is the base class for Requests exceptions. It appears when catching broadly or raising manually.

### Fix

Catch specific exceptions first; log details (URL, status, headers) for diagnostics.

#### Wrong code

```python
import requests
try:
    requests.get('https://example.com')
except requests.exceptions.RequestException:
    print('failed')
```

#### Fixed code

```python
import requests
try:
    r = requests.get('https://example.com', timeout=5)
    r.raise_for_status()
except (requests.exceptions.Timeout,
        requests.exceptions.ConnectionError,
        requests.exceptions.HTTPError) as e:
    print('specific failure:', e)
```
