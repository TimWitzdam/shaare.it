---
title: "Socket Closed During Request"
description: "Connection aborted because the remote closed the socket mid-request/response in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Socket closed during request

```bash
$ python -c "import requests; requests.get('https://example.com/unstable')"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectionError: ('Connection aborted.', ConnectionResetError(104, 'Connection reset by peer'))
```

### Why this happens

Servers may time out or reset connections under load or due to misconfiguration.

### Fix

Retry with backoff; tune timeouts; use keep-alive and smaller payloads.

#### Wrong code

```python
import requests
requests.get('https://example.com/unstable')
```

#### Fixed code

```python
import requests
from urllib3.util.retry import Retry
from requests.adapters import HTTPAdapter

s = requests.Session()
s.mount('https://', HTTPAdapter(max_retries=Retry(total=3, backoff_factor=0.5)))
s.get('https://example.com/unstable', timeout=5)
```
