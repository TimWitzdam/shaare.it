---
title: "RuntimeError: No application found. Push an application context"
description: "Why Flask complains about missing application context and how to structure code to push contexts appropriately."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: No application found. Push an application context

```bash
$ python - <<'PY'
from flask import Flask, url_for
app = Flask(__name__)
print(url_for('index'))
PY
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
  File "/.../flask/helpers.py", line ..., in url_for
RuntimeError: Working outside of application context.
```

### Why this happens

Flask requires an application context to access app-specific data (configuration, URL map). Calling helpers like `url_for`, `current_app`, or `g` without a context raises `RuntimeError`.

### Fix

- Use `with app.app_context():` around code that uses app-specific helpers outside of request handlers.
- In tests, use `app.test_request_context()` to simulate a request and URL building.
- Avoid running such code at import-time.

#### Wrong code

```python
from flask import url_for
links = [url_for('index')]  # At import time, no context
```

#### Fixed code

```python
from flask import url_for
from yourapp import app

def build_links():
    with app.app_context():
        return [url_for('index')]
```

Test example:

```python
with app.test_request_context('/'):
    assert url_for('index') == '/'
```

Push contexts when using Flask helpers outside request handlers to avoid `RuntimeError`.
