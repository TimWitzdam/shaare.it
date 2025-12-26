---
title: "Retry Strategy Misconfigured"
description: "Wrong Retry settings in Requests/urllib3 cause unexpected behavior or no retries."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Retry strategy misconfigured

```bash
$ python -c "import requests; from requests.adapters import HTTPAdapter; from urllib3.util.retry import Retry; s=requests.Session(); s.mount('https://', HTTPAdapter(max_retries=Retry(total='x'))); s.get('https://example.com')"
Traceback (most recent call last):
  ...
TypeError: cannot concatenate 'str' and 'int'
```

### Why this happens

Retry.total must be int; wrong retryable methods/status codes can disable retries.

### Fix

Configure Retry with correct types and backoff.

#### Wrong code

```python
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
import requests
s = requests.Session()
s.mount('https://', HTTPAdapter(max_retries=Retry(total='3')))
```

#### Fixed code

```python
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
import requests
s = requests.Session()
retry = Retry(total=3, backoff_factor=0.5, status_forcelist=[429, 500, 502, 503, 504])
s.mount('https://', HTTPAdapter(max_retries=retry))
```
