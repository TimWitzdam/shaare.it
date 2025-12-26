---
title: "TypeError: jsonify does not accept multiple top-level objects"
description: "Passing multiple positional values to jsonify creates ambiguity and raises TypeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: jsonify multiple top-level objects

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 10, in api
    return jsonify({'a': 1}, {'b': 2})
TypeError: jsonify accepts at most one top-level object
```

### Why this happens

`jsonify` expects a single mapping or sequence to serialize. Passing multiple positional arguments is ambiguous: should it be a list, a dict merge, or a tuple? Flask raises `TypeError` to enforce clarity.

### Fix

Wrap values in a single dict or list, or merge them before calling `jsonify`.

#### Wrong code

```python
from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/api')
def api():
    return jsonify({'a': 1}, {'b': 2})
```

#### Fixed code

```python
from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/api')
def api():
    return jsonify({'a': 1, 'b': 2})
```

### Tip

For multiple items, consider returning a list: `jsonify([obj1, obj2])`.
