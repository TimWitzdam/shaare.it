---
title: "Unicode URL normalization issues"
description: "Internationalized domain names/paths need proper encoding (IDNA/punycode)."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Unicode URL normalization

```bash
$ python -c "import requests; requests.get('https://mañana.example/niño')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidURL: Failed to parse IDN
```

### Why this happens

Non-ASCII domains must be encoded with IDNA (punycode), and paths should be percent-encoded.

### Fix

- Use ASCII punycode for host and `params=` or quoting for paths.

#### Wrong code

```python
import requests
requests.get("https://mañana.example/niño")
```

#### Fixed code

```python
import requests
from idna import encode as idna_encode
host = idna_encode("mañana.example").decode()
url = f"https://{host}/ni%C3%B1o"
resp = requests.get(url)
print(resp.status_code)
```
