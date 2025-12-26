---
title: "Multipart field name missing"
description: "Uploads fail because files/data are sent without a field name."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Multipart field name missing

```bash
$ python -c "import requests; requests.post('https://upload.example.com', files={None: ('a.txt', b'data')})"
Traceback (most recent call last):
  ...
ValueError: files must be a dictionary of {fieldname: fileinfo}
```

### Why this happens

Requests expects a mapping from field name to file info. Missing field names make it impossible to construct the form.

### Fix

- Provide a valid field name string for each file.

#### Wrong code

```python
import requests
files = {None: ("a.txt", b"data")}
requests.post("https://upload.example.com", files=files)
```

#### Fixed code

```python
import requests
files = {"attachment": ("a.txt", b"data", "text/plain")}
resp = requests.post("https://upload.example.com", files=files)
print(resp.ok)
```
