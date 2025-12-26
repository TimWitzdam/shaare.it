---
title: "TemplateDoesNotExist: extends base not found"
description: "Extending a base template that isn't in the template search paths causes errors."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TemplateDoesNotExist: extends base not found

```bash
$ cat child.html
{% extends "base.html" %}
```

```bash
$ python manage.py runserver
TemplateDoesNotExist: base.html
```

### Why this happens

`base.html` isn't located in a configured templates directory or app templates structure.

### Fix

Place `base.html` under `templates/` or app's `templates/app/` and configure `TEMPLATES`.

#### Wrong code

```text
project/
  base.html  # not under templates/
```

#### Fixed code

```text
project/
  templates/
    base.html
```
