---
title: "TypeError: __init__() got an unexpected keyword argument 'debug'"
description: "Debug is not a Flask constructor argument—use app.run(debug=True) or config."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: unexpected kwarg 'debug'

```bash
$ python app.py
Traceback (most recent call last):
  ...
TypeError: __init__() got an unexpected keyword argument 'debug'
```

### Why this happens

`Flask(__name__, debug=True)` is invalid—`debug` is not a constructor kwarg. Debug mode is controlled via `app.run(debug=True)` or `app.config['DEBUG'] = True`.

### Fix

- Remove `debug` from constructor.
- Use `app.run(debug=True)` or set config.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__, debug=True)  # wrong
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

if __name__ == "__main__":
    app.run(debug=True)
```
