---
title: "TemplateDoesNotExist: missing template in app"
description: "Template not found due to wrong DIRS or app directories setting."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TemplateDoesNotExist: missing template in app

```bash
$ python manage.py runserver
...
TemplateDoesNotExist: blog/index.html
```

### Why this happens

Template path isn’t inside configured `TEMPLATES['DIRS']` or app directories disabled.

### Fix

Enable app dirs and put templates under `app/templates/app/`.

#### Wrong code

```python
TEMPLATES = [{
  'APP_DIRS': False,
  'DIRS': [],
}]
```

#### Fixed code

```python
TEMPLATES = [{
  'APP_DIRS': True,
  'DIRS': [BASE_DIR / 'templates'],
}]
```
