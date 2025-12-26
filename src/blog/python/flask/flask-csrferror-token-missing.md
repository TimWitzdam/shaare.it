---
title: "CSRFError: The CSRF token is missing or invalid"
description: "Enable CSRF protection and pass tokens correctly in forms and JSON requests in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## CSRFError: token missing

```bash
$ curl -X POST http://localhost:5000/submit -d "name=Tim"
Traceback (most recent call last):
  ...
CSRFError: The CSRF token is missing or invalid
```

### Why this happens

You enabled CSRF protection but didn’t include the token in your form or headers.

### Fix

- Render the token field in templates and include it in POSTs.
- For APIs, place token in header and validate server-side.

#### Wrong code

```python
<form method="post">
  <input name="name">
  <button>Send</button>
</form>
```

#### Fixed code

```python
<form method="post">
  {{ form.csrf_token }}
  <input name="name">
  <button>Send</button>
</form>
```
