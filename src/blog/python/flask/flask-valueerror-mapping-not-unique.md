---
title: "ValueError: View function mapping is not unique (duplicate routes)"
description: "Avoid duplicate route mappings—ensure unique endpoints and rules across app and blueprints in Flask."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ValueError: mapping not unique

```bash
$ flask run
Traceback (most recent call last):
  ...
ValueError: View function mapping is not unique
```

### Why this happens

You registered multiple view functions for the same endpoint name or URL rule, often by importing a module twice, registering the same blueprint multiple times, or defining the same function name between different modules and blueprints without unique prefixes.

### Fix

- Ensure each endpoint name is unique or use explicit `endpoint` names.
- Register blueprints once, and use `url_prefix` to differentiate.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'A'

@app.route('/')
def index():  # duplicates mapping
    return 'B'
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

@app.route('/', endpoint='index_a')
def index_a():
    return 'A'

@app.route('/b', endpoint='index_b')
def index_b():
    return 'B'
```
