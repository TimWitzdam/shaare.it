---
title: "SuspiciousFileOperation: Attempted access outside of template directories"
description: "Referencing templates with paths outside allowed directories triggers security errors."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## SuspiciousFileOperation: template access outside directories

```bash
$ python manage.py runserver
SuspiciousFileOperation: The joined path is located outside of the base path component
```

### Why this happens

Using `../` or absolute paths to templates outside allowed roots.

### Fix

Keep templates within configured directories and reference them by name.

#### Wrong code

```python
render(request, "../secret.html")
```

#### Fixed code

```python
render(request, "app/secret.html")
```
