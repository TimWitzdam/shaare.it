---
title: "ValueError: Invalid URL converter"
description: "Using unknown or misconfigured URL converters in routes triggers a ValueError in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ValueError: Invalid URL converter

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 9, in <module>
    @app.route('/items/<uuidx:item_id>')
ValueError: unknown converter 'uuidx'
```

### Why this happens

Flask’s routing uses converters (like `int`, `string`, `uuid`). Using a typo or an unregistered custom converter name makes the rule builder fail and raises `ValueError`.

### Fix

Use built-in converter names or register custom converters via `app.url_map.converters['name'] = ConverterClass`.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

@app.route('/items/<uuidx:item_id>')
def show(item_id):
    return str(item_id)
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

@app.route('/items/<uuid:item_id>')
def show(item_id):
    return str(item_id)
```

### Tip

For custom converters, subclass `werkzeug.routing.BaseConverter` and optionally implement `to_python`/`to_url`.
