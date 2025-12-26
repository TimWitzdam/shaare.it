---
title: "Adapter Mount Prefix Mismatch"
description: "Session.mount prefix not matching target URLs causes custom adapter not to be used in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Adapter mount prefix mismatch

```bash
$ python -c "import requests; from requests.adapters import HTTPAdapter; s=requests.Session(); s.mount('http://api.', HTTPAdapter()); s.get('http://api.example.com')"
# Works, but if prefix wrong, custom behavior not applied
```

### Why this happens

Mount prefixes must match URL scheme/host patterns; otherwise default adapter is used.

### Fix

Mount on 'http://' and/or 'https://', or exact host prefixes.

#### Wrong code

```python
import requests
from requests.adapters import HTTPAdapter
s = requests.Session()
s.mount('api.example.com', HTTPAdapter())
s.get('http://api.example.com')
```

#### Fixed code

```python
import requests
from requests.adapters import HTTPAdapter
s = requests.Session()
s.mount('http://', HTTPAdapter())
s.mount('https://', HTTPAdapter())
s.get('http://api.example.com', timeout=10)
```
