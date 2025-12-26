---
title: "requests.exceptions.InvalidSchema: No connection adapters were found"
description: "No connection adapters errors in Requests and choosing supported schemes."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## InvalidSchema: No connection adapters were found

```bash
$ python -c "import requests; requests.get('mailto:user@example.com')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidSchema: No connection adapters were found for 'mailto:user@example.com'
```

### Why this happens

Unsupported URL scheme.

### Fix

Use http/https or the appropriate library for the scheme.

#### Wrong code

```python
import requests
requests.get('file:///tmp/x')
```

#### Fixed code

```python
import requests
requests.get('https://example.com')
```
