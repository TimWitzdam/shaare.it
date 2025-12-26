---
title: "PermissionError during upload"
description: "No permission to read a local file for multipart upload."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## PermissionError uploading

```bash
$ python -c "import requests; requests.post('https://upload.example.com', files={'file': open('/root/secret','rb')})"
Traceback (most recent call last):
  ...
PermissionError: [Errno 13] Permission denied: '/root/secret'
```

### Why this happens

Insufficient filesystem permissions.

### Fix

- Use readable paths or adjust permissions.

#### Wrong code

```python
import requests
files = {"file": open("/root/secret", "rb")}
requests.post("https://upload.example.com", files=files)
```

#### Fixed code

```python
import requests
files = {"file": open("/home/user/report.txt", "rb")}
resp = requests.post("https://upload.example.com", files=files)
print(resp.ok)
```
