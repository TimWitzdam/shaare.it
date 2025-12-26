---
title: "urllib3.exceptions.RetryError: Max retries exceeded"
description: "RetryError bubbling up in Requests and configuring retries safely."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## RetryError: Max retries exceeded

```bash
$ python -c "import requests; requests.get('http://nonexistent')"
Traceback (most recent call last):
  ...
urllib3.exceptions.RetryError: HTTPSConnectionPool(host='nonexistent', port=443): Max retries exceeded
```

### Why this happens

Connection failures after multiple retry attempts.

### Fix

Reduce retry count, fix network/DNS, or disable retries for failing endpoints.

#### Wrong code

```python
import requests
requests.get('http://nonexistent')
```

#### Fixed code

```python
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
retries = Retry(total=3, backoff_factor=0.3, status_forcelist=[500, 502, 503, 504])
session.mount('https://', HTTPAdapter(max_retries=retries))
resp = session.get('https://example.com', timeout=5)
print(resp.status_code)
```
