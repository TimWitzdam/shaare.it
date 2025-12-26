---
title: "ValueError: invalid URL parameter conversion"
description: "Converting URL params to ints/floats can raise ValueError when input is malformed."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ValueError on URL param conversion

```bash
$ curl -sS http://localhost:5000/items/abc
Traceback (most recent call last):
  File "/path/to/app.py", line 12, in item
    item_id = int(id)
ValueError: invalid literal for int() with base 10: 'abc'
```

### Why this happens

Manually converting route parameters can fail if the string isn’t a valid representation. Malicious or accidental inputs cause `ValueError`.

### Fix

Use Flask’s route converters (`<int:id>`, `<float:value>`) or validate before converting. Return 400 on invalid input.

#### Wrong code

```python
# app.py
from flask import Flask
app = Flask(__name__)

@app.get('/items/<id>')
def item(id):
    item_id = int(id)  # ValueError on bad input
    return {'id': item_id}
```

#### Fixed code

```python
# app.py
from flask import Flask, abort
app = Flask(__name__)

@app.get('/items/<int:id>')
def item(id):
    return {'id': id}

# Or validate explicitly
@app.get('/scores/<score>')
def score(score):
    try:
        s = float(score)
    except ValueError:
        abort(400, description='Invalid score')
    return {'score': s}
```

### Tips

- Prefer route converters for strict types.
- Use descriptive error messages on 400 responses.
