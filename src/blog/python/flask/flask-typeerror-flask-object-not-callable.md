---
title: "TypeError: 'Flask' object is not callable"
description: "Calling the Flask app like a function raises a TypeError; learn proper ways to start and interact with the app."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: 'Flask' object is not callable

```bash
$ python -c "from flask import Flask; app = Flask(__name__); app()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'Flask' object is not callable
```

### Why this happens

This error happens when you try to call a `Flask` instance like a function: `app()`. Although Flask apps implement the WSGI application interface, they are meant to be called by a WSGI server (Gunicorn, uWSGI, Waitress) per request, not directly in your code. Directly invoking `app()` bypasses the request lifecycle, context management, and routing machinery, leading to a `TypeError` because the instance isn’t designed to be invoked.

### Fix

Start the development server with `app.run()` and interact with your routes via HTTP. For tests, use `app.test_client()` or Flask’s CLI `flask run`. In production, configure a WSGI server to load `app` without calling it yourself.

#### Wrong code

```python
from flask import Flask

app = Flask(__name__)

# ❌ Incorrect: attempting to call the app object
result = app()
print(result)
```

#### Fixed code

```python
from flask import Flask

app = Flask(__name__)

@app.get("/")
def index():
    return "Hello, Flask!"

if __name__ == "__main__":
    # ✅ Start dev server properly
    app.run(debug=True)

# For tests, use the test client instead of calling the app
# with app.test_client() as client:
#     resp = client.get("/")
#     assert resp.status_code == 200
#     assert resp.data == b"Hello, Flask!"
```

### Additional notes

- When wrapping your app with middleware, pass `app` (the object), not `app()`.
- If you use blueprints or factory patterns, export the `app` object or a factory that returns it; never call the instance itself.
- In ASGI environments (Quart, FastAPI), the callable interface is different; stick to their server invocation patterns.
