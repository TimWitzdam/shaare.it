---
title: "TemplateSyntaxError: expected token 'end of print statement'"
description: "Jinja syntax errors in Flask templates—learn common pitfalls and how to fix them robustly."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TemplateSyntaxError: expected token

```bash
$ flask run
Traceback (most recent call last):
  ...
jinja2.exceptions.TemplateSyntaxError: expected token 'end of print statement', got ':'
```

### Why this happens

This indicates malformed Jinja syntax—unclosed braces, using `{% %}` instead of `{{ }}` for expressions, or stray punctuation causing the parser to expect the end of a print statement. Another source is mixing Python syntax with Jinja in templates (e.g., `for x in y:` when missing `{%` and `%}`), or adding filters/conditions incorrectly.

### Fix

- Distinguish `{{ ... }}` (print expression) from `{% ... %}` (statements like for/if/block).
- Close all blocks (`{% endfor %}`, `{% endif %}`).
- Validate filters and expressions; keep complex logic in views and pass simple data to templates.

#### Wrong code

```html
<p>{{ user.name: }}</p>
<!-- stray colon -->
{% if user %}
<p>{{ user.name }}</p>
<!-- missing endif -->
```

#### Fixed code

```html
{% if user %}
<p>{{ user.name }}</p>
{% endif %}
```
