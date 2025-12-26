---
title: "Jinja2 UndefinedError: 'variable' is undefined"
description: "Template variables must exist—how to debug missing context in Flask/Jinja."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## Jinja2 UndefinedError: variable is undefined

```bash
$ flask run
Traceback (most recent call last):
  ...
jinja2.exceptions.UndefinedError: 'username' is undefined
```

### Why this happens

The template references a variable that isn’t provided in the context. Typos, renamed variables, or forgetting to pass data to `render_template` trigger this.

### Fix

- Pass variables explicitly via `render_template("page.html", username=name)`.
- Ensure context keys match template usage.

#### Wrong code

```python
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    name = "Tim"
    return render_template("index.html")  # username not passed
```

#### Fixed code

```python
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    name = "Tim"
    return render_template("index.html", username=name)
```
