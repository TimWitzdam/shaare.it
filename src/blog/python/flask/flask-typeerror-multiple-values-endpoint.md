---
title: "TypeError: got multiple values for argument 'endpoint'"
description: "Use add_url_rule correctly—avoid passing endpoint twice in positional and keyword forms in Flask routing."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: multiple values for 'endpoint'

```bash
$ flask run
Traceback (most recent call last):
  ...
TypeError: add_url_rule() got multiple values for argument 'endpoint'
```

### Why this happens

Passing `endpoint` both positionally and as a keyword, or conflicting decorator options, leads to this error.

### Fix

- Provide `endpoint` once and prefer keyword arguments.

#### Wrong code

```python
app.add_url_rule('/x', 'x', endpoint='x', view_func=lambda: 'x')
```

#### Fixed code

```python
app.add_url_rule('/x', endpoint='x', view_func=lambda: 'x')
```
