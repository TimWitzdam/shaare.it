---
title: "KeyError: 'csrf_token' in template"
description: "Render and include CSRF tokens properly—avoid missing csrf_token in Flask-WTF forms and templates."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## KeyError: csrf_token

```bash
$ flask run
Traceback (most recent call last):
  ...
KeyError: 'csrf_token'
```

### Why this happens

Templates expect `csrf_token` but you didn’t render the form’s field or you disabled CSRF incorrectly.

### Fix

- Use Flask-WTF forms and include `{{ form.csrf_token }}` in forms.

#### Wrong code

```html
<form method="post">
  <input name="name" />
  <button>Send</button>
</form>
```

#### Fixed code

```html
<form method="post">
  {{ form.csrf_token }}
  <input name="name" />
  <button>Send</button>
</form>
```
