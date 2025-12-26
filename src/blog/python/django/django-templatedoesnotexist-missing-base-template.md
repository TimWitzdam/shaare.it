---
title: "TemplateDoesNotExist: missing base template"
description: "Extending a base that isn't on template search path or named incorrectly."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TemplateDoesNotExist: missing base template

```bash
$ python manage.py runserver
...
TemplateDoesNotExist: base.html
```

### Why this happens

Base template not found under templates directories.

### Fix

Place `base.html` in project templates or app templates.

#### Wrong code

```python
{% extends "base.html" %}
```

#### Fixed code

```python
# ensure base.html exists in templates/ and TEMPLATES settings include DIRS/app dirs
```
