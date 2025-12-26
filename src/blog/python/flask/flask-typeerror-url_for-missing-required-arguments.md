---
title: "TypeError: url_for() missing required arguments"
description: "Calling url_for without required parameters for the endpoint will raise a TypeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: url_for() missing required arguments

```bash
$ flask --app app.py shell -c "from app import app; from flask import url_for; with app.test_request_context(): url_for('user_detail')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: url_for() missing 1 required positional argument: 'user_id'
```

### Why this happens

Your endpoint's route rule includes variables (like `<int:user_id>`). When generating a URL with `url_for`, you must provide values for all variables. If any are missing, Flask raises `TypeError` to indicate the missing arguments.

### Fix

Pass all variable parts as keyword arguments to `url_for`. Use types consistent with route converters, e.g., int for `<int:user_id>`.

#### Wrong code

```python
from flask import Flask, url_for
app = Flask(__name__)

@app.route('/users/<int:user_id>')
def user_detail(user_id):
    return f"User {user_id}"

with app.test_request_context():
    url_for('user_detail')  # missing user_id
```

#### Fixed code

```python
from flask import Flask, url_for
app = Flask(__name__)

@app.route('/users/<int:user_id>')
def user_detail(user_id):
    return f"User {user_id}"

with app.test_request_context():
    url = url_for('user_detail', user_id=42)
    # url == '/users/42'
```

### Tips

- If the rule has multiple variables (`/teams/<team>/users/<int:user_id>`), pass both.
- For query strings, add `arg=value` to `url_for` (e.g., `url_for('list_users', page=2)`).
