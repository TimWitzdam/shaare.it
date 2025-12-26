---
title: "Invalid Hostname in URL"
description: "Typos or illegal characters in the hostname lead to DNS or parsing errors."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid hostname

```bash
$ python -c "import requests; requests.get('https://exa mple.com')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidURL: Failed to parse: https://exa mple.com
```

### Why this happens

Spaces or illegal characters in the host, or invalid punycode/IDNA.

### Fix

Use a valid hostname, apply IDNA encoding for international domains.

#### Wrong code

```python
import requests
requests.get('https://exa mple.com')
```

#### Fixed code

```python
import requests
requests.get('https://example.com', timeout=10)
```
