---
title: "Multipart boundary not found"
description: "Server cannot parse multipart/form-data due to missing or wrong boundary."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Multipart boundary not found

```bash
$ python -c "import requests; requests.post('https://upload.example.com', headers={'Content-Type':'multipart/form-data'}, data={'file':'data'})"
# Server responds 400 Bad Request: boundary not found
```

### Why this happens

Manually setting `Content-Type: multipart/form-data` without a proper boundary prevents the server from parsing the form.

### Fix

- Let Requests set `Content-Type` automatically by using `files=` or form `data=` without overriding the header.

#### Wrong code

```python
import requests
headers = {"Content-Type": "multipart/form-data"}
requests.post("https://upload.example.com", headers=headers, data={"file": "data"})
```

#### Fixed code

```python
import requests
files = {"file": ("report.txt", b"hello", "text/plain")}
resp = requests.post("https://upload.example.com", files=files)
print(resp.status_code)
```
