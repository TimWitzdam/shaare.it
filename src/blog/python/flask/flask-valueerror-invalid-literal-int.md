---
title: "ValueError: invalid literal for int() with base 10"
description: "Validate and convert request args safely—handle bad integers from query/path in Flask routes."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ValueError: invalid literal for int()

```bash
$ curl "http://localhost:5000/add?a=10&b=foo"
Traceback (most recent call last):
  ...
ValueError: invalid literal for int() with base 10: 'foo'
```

### Why this happens

Converting request strings to integers without validation raises `ValueError` when the input contains non-digits.

### Fix

- Validate input with `isdigit()` or try/except and return 400 on invalid data.

#### Wrong code

```python
from flask import Flask, request
app = Flask(__name__)

@app.get('/add')
def add():
    a = int(request.args.get('a'))
    b = int(request.args.get('b'))
    return str(a + b)
```

#### Fixed code

```python
from flask import Flask, request, jsonify
app = Flask(__name__)

@app.get('/add')
def add():
    try:
        a = int(request.args.get('a', ''))
        b = int(request.args.get('b', ''))
    except (TypeError, ValueError):
        return jsonify(error='invalid integers'), 400
    return jsonify(sum=a+b)
```
