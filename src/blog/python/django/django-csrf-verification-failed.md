---
title: "403 CSRF verification failed"
description: "Common CSRF protection errors and how to include tokens in forms and AJAX."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## 403 CSRF verification failed

```bash
$ curl -X POST http://localhost:8000/form/ -d 'x=1'
HTTP/1.1 403 Forbidden
```

### Why this happens

POST requests to CSRF-protected views lack a valid token, or you're posting from a different domain without `CSRF_TRUSTED_ORIGINS`.

### Fix

Include `{% csrf_token %}` in forms and send the CSRF token header in AJAX. Configure `CSRF_TRUSTED_ORIGINS` for cross-domain posts.

#### Wrong code

```html
<form method="post">
  <input name="x" />
</form>
```

#### Fixed code

```html
<form method="post">
  {% csrf_token %}
  <input name="x" />
</form>
```
