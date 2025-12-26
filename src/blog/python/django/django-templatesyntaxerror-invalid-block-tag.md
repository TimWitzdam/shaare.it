---
title: "TemplateSyntaxError: Invalid block tag"
description: "Typo in template tag names or missing `{% load %}` for custom tags leads to invalid block tag errors."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TemplateSyntaxError: Invalid block tag

```bash
$ cat template.html
{% if user.is_authenticated %}
  Hello
{% ednif %}
```

```bash
$ python manage.py runserver
TemplateSyntaxError: Invalid block tag on line 3: 'ednif'. Did you forget to register or load this tag?
```

### Why this happens

Typo in tag name or missing `{% load %}` for custom tags.

### Fix

Correct the tag spelling or load the tag library.

#### Wrong code

```html
{% ednif %}
```

#### Fixed code

```html
{% endif %}
```
