---
title: "Unknown Host"
description: "Requests fails for unknown hostname (typo or non-existent domain)."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Unknown host

```bash
$ python -c "import requests; requests.get('https://exampel.com')"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectionError: DNS resolution failed
```

### Why this happens

Typo in domain or domain not registered.

### Fix

Correct the hostname spelling.

#### Wrong code

```python
import requests
requests.get('https://exampel.com')
```

#### Fixed code

```python
import requests
requests.get('https://example.com', timeout=10)
```
