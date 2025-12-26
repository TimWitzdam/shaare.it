---
title: "TemplateDoesNotExist: 'home.html'"
description: "Why Django can't find your templates and how to configure TEMPLATES and DIRS."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TemplateDoesNotExist: 'home.html'

```bash
$ python -c "from django.template.loader import get_template; get_template('home.html')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
django.template.exceptions.TemplateDoesNotExist: home.html
```

### Why this happens

Your template isn't in any configured directories, `APP_DIRS`/`DIRS` are misconfigured, or the app isn't in `INSTALLED_APPS`.

### Fix

Add correct template directories to `TEMPLATES[0]['DIRS']` or enable `APP_DIRS` and ensure your app has `templates/app_name/...` and is in `INSTALLED_APPS`.

#### Wrong code

```python
# settings.py
TEMPLATES = [{
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [],
    'APP_DIRS': False,
    'OPTIONS': {},
}]
```

#### Fixed code

```python
# settings.py
TEMPLATES = [{
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [BASE_DIR / 'templates'],
    'APP_DIRS': True,
    'OPTIONS': {},
}]
```
