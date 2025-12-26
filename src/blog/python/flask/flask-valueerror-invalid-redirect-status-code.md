---
title: "ValueError: Invalid redirect status code"
description: "Flask redirect only supports specific 3xx status codes; invalid codes raise ValueError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ValueError: Invalid redirect status code

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 12, in go
    return redirect('/home', code=200)
ValueError: Invalid redirect status code
```

### Why this happens

`redirect()` must use a valid 3xx status code (typically 301, 302, 303, 307, 308). Using non-redirect codes (like 200 or 404) confuses clients and breaks semantics, so Flask validates and raises `ValueError` when the `code` is outside allowed range.

### Fix

Pass a valid 3xx code or omit `code` to default to 302. Choose between permanent (301/308) and temporary (302/307/303) depending on behavior regarding method preservation.

#### Wrong code

```python
from flask import Flask, redirect
app = Flask(__name__)

@app.route('/go')
def go():
    return redirect('/home', code=200)
```

#### Fixed code

```python
from flask import Flask, redirect, url_for
app = Flask(__name__)

@app.route('/go')
def go():
    return redirect(url_for('home'), code=302)

@app.route('/home')
def home():
    return 'Home'
```

### Tip

Use 308/307 to preserve request method (POST remains POST). Use 303 to force GET on redirection.
