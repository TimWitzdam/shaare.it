---
title: "Response content too large"
description: "Huge responses can exhaust memory when loading into `content` or `text`."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Response too large

```bash
$ python -c "import requests; len(requests.get('https://big.example.com/blob').content)"
# May raise MemoryError or cause process to be killed
```

### Why this happens

Loading very large bodies into memory can cause `MemoryError` or OOM kills.

### Fix

- Stream and process in chunks with `stream=True`.

#### Wrong code

```python
import requests
content = requests.get("https://big.example.com/blob").content
print(len(content))
```

#### Fixed code

```python
import requests
with requests.get("https://big.example.com/blob", stream=True) as r:
    r.raise_for_status()
    for chunk in r.iter_content(chunk_size=1024 * 1024):
        # process chunk
        pass
```
