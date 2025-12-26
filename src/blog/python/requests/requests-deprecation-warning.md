---
title: "DeprecationWarning: Using deprecated Requests/urllib3 API"
description: "Deprecation warnings and how to migrate to supported APIs in Requests/urllib3."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## DeprecationWarning: Deprecated API usage

```bash
$ python -c "import warnings; warnings.warn('deprecated', DeprecationWarning)"
<string>:1: DeprecationWarning: deprecated
```

### Why this happens

Using deprecated functions/parameters.

### Fix

Read release notes and update code to use supported APIs.

#### Wrong code

```python
import requests
requests.get('https://example.com', timeout=None)  # hypothetically deprecated
```

#### Fixed code

```python
import requests
requests.get('https://example.com', timeout=5)
```
