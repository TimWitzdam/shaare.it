---
title: "SuspiciousOperation: Suspicious file path in upload"
description: "Invalid filenames or directory traversal attempts in FileField uploads trigger SuspiciousOperation."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## SuspiciousOperation: suspicious file upload path

```bash
$ curl -F "file=@/etc/passwd" http://localhost:8000/upload/
HTTP/1.1 400 Bad Request
```

### Why this happens

User-supplied filenames include `..` or absolute paths; storage backends reject unsafe paths.

### Fix

Sanitize filenames with `FileField.upload_to` and default storages; never trust client filenames.

#### Wrong code

```python
f = request.FILES['file']
path = '/uploads/' + f.name  # unsafe
```

#### Fixed code

```python
class Doc(models.Model):
    file = models.FileField(upload_to='docs/')
# Django storage sanitizes names
```
