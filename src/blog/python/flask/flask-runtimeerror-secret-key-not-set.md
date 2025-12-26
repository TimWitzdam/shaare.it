---
title: "RuntimeError: The session is unavailable because no secret key was set"
description: "Understanding Flask's session error about missing SECRET_KEY and how to configure it safely for development and production."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: The session is unavailable because no secret key was set

```bash
$ python -c "from flask import Flask, session; app = Flask(__name__); with app.test_request_context(): session['x']=1"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
RuntimeError: The session is unavailable because no secret key was set. Set the secret_key on the application to something unique and secret.
```

### Why this happens

Flask uses a cryptographic key to sign session cookies. Without `SECRET_KEY`, Flask cannot create or verify session data, and raises a `RuntimeError` when you attempt to read or write `session`.

### Fix

- Set a non-empty, sufficiently random `SECRET_KEY` on your app (development and production).
- Use environment variables for production, avoid committing secrets.
- Ensure you set the key before any session operations or blueprint registrations that rely on it.

#### Wrong code

```python
from flask import Flask, session

app = Flask(__name__)

@app.route('/login')
def login():
    session['user_id'] = 42  # Raises RuntimeError without SECRET_KEY
    return 'ok'
```

#### Fixed code

```python
import os
from flask import Flask, session

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-please-change')

@app.route('/login')
def login():
    session['user_id'] = 42
    return 'ok'
```

For production, set `SECRET_KEY` via environment:

```bash
export SECRET_KEY="your-64-byte-random-hex-or-base64"
flask run
```

Use a strong random value and rotate keys when necessary. Never hardcode sensitive secrets in source control.
