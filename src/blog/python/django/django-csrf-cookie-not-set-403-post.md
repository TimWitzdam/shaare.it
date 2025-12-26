---
title: "403 CSRF verification failed: CSRF cookie not set"
description: "Submitting POST forms without CSRF token or middleware setup."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## 403 CSRF verification failed: CSRF cookie not set

```bash
$ curl -X POST http://localhost:8000/form/ -d "x=1"
<!DOCTYPE html>
<html><body>Forbidden (403) CSRF verification failed. Request aborted.</body></html>
```

### Why this happens

CSRF token missing in form or CSRF middleware disabled.

### Fix

Include `{% csrf_token %}` in forms and ensure `CsrfViewMiddleware` is enabled. For APIs, use `@csrf_exempt` cautiously or token headers.

#### Wrong code

```html
<form method="post">
  <input name="x" />
  <button>Submit</button>
</form>
```

#### Fixed code

```html
<form method="post">
  {% csrf_token %}
  <input name="x" />
  <button>Submit</button>
</form>
```
