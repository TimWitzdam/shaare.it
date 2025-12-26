---
title: "TemplateSyntaxError: Could not parse the remainder"
description: "Malformed template expressions or missing quotes lead to parse errors in Django templates."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## TemplateSyntaxError: Could not parse the remainder

```bash
$ cat template.html
{{ user.username|default:Anonymous }}
```

```bash
$ python manage.py runserver
TemplateSyntaxError: Could not parse the remainder: 'Anonymous' from 'default:Anonymous'
```

### Why this happens

Filters requiring string args must be quoted; colon syntax without quotes breaks parsing.

### Fix

Quote string arguments.

#### Wrong code

```html
{{ user.username|default:Anonymous }}
```

#### Fixed code

```html
{{ user.username|default:"Anonymous" }}
```
