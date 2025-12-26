---
title: "FileNotFoundError during upload"
description: "Local file path provided to `files=` does not exist."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## FileNotFoundError uploading

```bash
$ python -c "import requests; requests.post('https://upload.example.com', files={'file': open('missing.txt','rb')})"
Traceback (most recent call last):
  ...
FileNotFoundError: [Errno 2] No such file or directory: 'missing.txt'
```

### Why this happens

The path is wrong or the file was deleted.

### Fix

- Verify the file path and existence before opening.

#### Wrong code

```python
import requests
files = {"file": open("missing.txt", "rb")}
requests.post("https://upload.example.com", files=files)
```

#### Fixed code

```python
import os
import requests
path = "report.txt"
if os.path.exists(path):
    files = {"file": open(path, "rb")}
    resp = requests.post("https://upload.example.com", files=files)
    print(resp.status_code)
```
