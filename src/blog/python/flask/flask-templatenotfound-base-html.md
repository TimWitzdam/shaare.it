---
title: "TemplateNotFound: base.html"
description: "Ensure correct templates folder and inheritance paths—fix missing base.html in Flask/Jinja projects."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TemplateNotFound: base.html

```bash
$ flask run
Traceback (most recent call last):
  ...
jinja2.exceptions.TemplateNotFound: base.html
```

### Why this happens

The layout template isn’t in the `templates/` folder or the inheritance path (`{% extends 'base.html' %}`) points to a wrong location.

### Fix

- Place `base.html` in `templates/` and ensure blueprint template folders are configured.

#### Wrong code

```html
{% extends 'layouts/base.html' %}
<!-- no such path -->
```

#### Fixed code

```html
{% extends 'base.html' %}
```
