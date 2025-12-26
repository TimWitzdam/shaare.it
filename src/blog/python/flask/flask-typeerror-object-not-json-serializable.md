---
title: "TypeError: Object of type X is not JSON serializable"
description: "Why jsonify fails with complex objects and how to convert data into JSON-safe structures in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: Object of type X is not JSON serializable

```bash
$ python - <<'PY'
from flask import Flask, jsonify
app = Flask(__name__)
@app.route('/')
def idx():
    class X: pass
    return jsonify({'x': X()})
with app.test_client() as c:
    r = c.get('/')
    print(r.status_code)
PY
500
```

### Why this happens

`jsonify` (and Flask’s automatic dict-to-JSON conversion) relies on Python’s `json` module. Arbitrary Python objects aren’t serializable by default, and nested non-serializable values cause `TypeError`. Common culprits include datetime objects, Decimal, set, and custom classes.

### Fix

- Convert values to JSON-safe types (strings, numbers, booleans, lists, dicts).
- For datetime/Decimal, serialize manually or use a library like `simplejson` or custom encoders.
- Implement a `to_dict()` or `asdict()` method for your models and call it before `jsonify`.

#### Wrong code

```python
@app.route('/order')
def order():
    from decimal import Decimal
    return jsonify({'total': Decimal('9.99')})
```

#### Fixed code

```python
@app.route('/order')
def order():
    from decimal import Decimal
    total = Decimal('9.99')
    return jsonify({'total': float(total)})
```

Custom class example:

```python
class User:
    def __init__(self, id, name):
        self.id = id
        self.name = name
    def to_dict(self):
        return {'id': self.id, 'name': self.name}

@app.route('/user')
def user():
    u = User(1, 'Ada')
    return jsonify(u.to_dict())
```

Ensure your response payload contains only JSON-serializable types to avoid `TypeError`.
