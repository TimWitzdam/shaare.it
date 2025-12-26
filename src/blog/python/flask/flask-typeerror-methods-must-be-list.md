---
title: "TypeError: methods must be a list or tuple"
description: "Route registration requires iterable of HTTP methods; wrong types raise TypeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: methods must be a list or tuple

```bash
$ python -c "from flask import Flask; app=Flask(__name__); @app.route('/', methods='POST')\ndef ix(): return 'ok'"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: methods must be a list of strings
```

### Why this happens

Flask expects `methods=["GET", "POST"]` or a tuple; passing a single string causes Flask to iterate characters, or raises `TypeError`. This is a common typo when defining routes.

### Fix

Wrap method names in a list or tuple, and use uppercase HTTP method names.

#### Wrong code

```python
from flask import Flask

app = Flask(__name__)

@app.route('/', methods="POST")
def index():
    return "ok"
```

#### Fixed code

```python
from flask import Flask

app = Flask(__name__)

@app.route('/', methods=["POST"])
def index():
    return "ok"
```

### Additional notes

- Default method is GET; add others as needed.
- Avoid duplicates; Flask will normalize but clarity helps.
- Consider separate view functions per method with `@app.get`/`@app.post` for readability.
