---
title: "TypeError: route must be a string"
description: "Using non-string route rules in Flask decorators causes TypeError; learn proper definitions."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: route must be a string

```bash
$ python -c "from flask import Flask; app=Flask(__name__); @app.get(123)\ndef ix(): return 'ok'"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: rule must be a string
```

### Why this happens

Route decorators like `@app.route`, `@app.get`, `@app.post` expect the URL rule as a string. Passing integers or other types raises `TypeError`. This often comes from variables set to non-strings or mistaken concatenations.

### Fix

Ensure your route rules are strings, starting with `/`, and use converters for variable segments (`<int:id>`). Keep dynamic parts as strings and validate inputs.

#### Wrong code

```python
from flask import Flask

app = Flask(__name__)

@app.get(123)
def index():
    return "ok"
```

#### Fixed code

```python
from flask import Flask

app = Flask(__name__)

@app.get("/")
def index():
    return "ok"
```

### Additional notes

- Prefer explicit methods via `@app.get`, `@app.post`, etc.
- Complex rules like `/items/<int:item_id>` must be strings; converters enforce types.
- Inspect `app.url_map` to verify registration.
