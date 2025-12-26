---
title: "Invalid percent-encoding in URL"
description: "Malformed URL encoding (like %ZZ) causes request failures."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid percent-encoding

```bash
$ python -c "import requests; requests.get('https://example.com/q=%ZZ')"
Traceback (most recent call last):
  ...
requests.exceptions.InvalidURL: Failed to parse: invalid percent-encoding
```

### Why this happens

URLs must use valid `%XX` hex escapes. Invalid sequences break parsing.

### Fix

- Use `requests.utils.quote` or `params=` to let Requests encode safely.

#### Wrong code

```python
import requests
requests.get("https://example.com/search?q=%ZZ")
```

#### Fixed code

```python
import requests
resp = requests.get("https://example.com/search", params={"q": "snow & sun"})
print(resp.request.url)
```
