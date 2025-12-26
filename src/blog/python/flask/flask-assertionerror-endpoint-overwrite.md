---
title: "AssertionError: View function mapping is overwriting an existing endpoint function"
description: "Duplicate endpoint names lead to mapping conflicts—how to avoid and fix."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## AssertionError: endpoint overwrite

```bash
$ flask run
Traceback (most recent call last):
  ...
AssertionError: View function mapping is overwriting an existing endpoint function: index
```

### Why this happens

Two routes share the same endpoint name, typically due to duplicate function names or explicit `endpoint` arguments colliding. Blueprints merging can also cause duplicates.

### Fix

- Ensure unique function names or set distinct `endpoint` values.
- For blueprints, prefix names or use `url_prefix` to avoid accidental overlaps.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

@app.route("/", endpoint="index")
def home():
    return "Home"

@app.route("/root", endpoint="index")
def root():
    return "Root"
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

@app.route("/", endpoint="home")
def home():
    return "Home"

@app.route("/root", endpoint="root")
def root():
    return "Root"
```
