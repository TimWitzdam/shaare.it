---
title: "ValueError: Invalid usage of jsonify"
description: "Passing unserializable or multiple positional arguments incorrectly to jsonify causes errors."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ValueError from jsonify

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "/path/to/app.py", line 20, in stats
    return jsonify(User())
ValueError: View return value is not JSON serializable
```

### Why this happens

`jsonify` converts Python objects to JSON. If you pass a non-serializable object (like a custom class without a serializer) or misuse its signature (e.g., multiple positional args that don’t map cleanly), Flask will raise a `ValueError` or produce an invalid response.

### Fix

Serialize complex objects into dicts/lists, or implement a `to_dict`/schema. Pass keyword args or a single dict/list to `jsonify` to keep shape predictable.

#### Wrong code

```python
# app.py
from flask import Flask, jsonify
app = Flask(__name__)

class User:  # not serializable by default
    def __init__(self, name):
        self.name = name

@app.get('/stats')
def stats():
    return jsonify(User('Ada'))
```

#### Fixed code

```python
# app.py
from flask import Flask, jsonify
app = Flask(__name__)

class User:
    def __init__(self, name):
        self.name = name
    def to_dict(self):
        return {'name': self.name}

@app.get('/stats')
def stats():
    user = User('Ada')
    return jsonify(user=user.to_dict(), ok=True)
```

### Tips

- Always return primitive JSON types (dict, list, str, int, float, bool, None).
- Use marshmallow or pydantic for complex serialization needs.
