---
title: "TypeError: unexpected keyword argument 'methods' in route decorator"
description: "Understanding why Flask rejects keyword arguments and how to pass them correctly to @app.route or Blueprint.route."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: unexpected keyword argument 'methods' in route decorator

```bash
$ python - <<'PY'
from flask import Flask
app = Flask(__name__)
@app.route('/x', methods=['POST'])(lambda: 'ok')
PY
Traceback (most recent call last):
  File "<stdin>", line 3, in <module>
TypeError: route() got an unexpected keyword argument 'methods'
```

### Why this happens

This typically means you’re not calling Flask’s `route` function but another symbol named `route` that doesn’t accept Flask’s parameters (e.g., you overshadowed `app` with something else, or used a custom decorator named `route`). It can also happen if you mistakenly call `Blueprint.route` wrong or override `route` on your app.

### Fix

- Ensure `app` is a `Flask` instance and not a function or a custom object.
- Use `@app.route('/path', methods=['POST'])` above the function definition; don’t call unrelated `route` functions.
- Avoid reassigning `app.route` or importing `route` from other libraries.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

route = lambda *a, **k: None  # Shadowing app.route

@route('/x', methods=['GET'])
def x():
    return 'ok'
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

@app.route('/x', methods=['GET'])
def x():
    return 'ok'
```

Make sure you’re using Flask’s decorator and that `app` is the right object.
