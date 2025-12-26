---
title: "TemplateNotFound: index.html"
description: "Why Flask can’t find your Jinja templates and how to fix template paths."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TemplateNotFound: index.html

```bash
$ flask run
Traceback (most recent call last):
  ...
jinja2.exceptions.TemplateNotFound: index.html
```

### Why this happens

Flask searches for templates in the `templates/` folder relative to the application or blueprint. Wrong filenames, missing directories, or custom `template_folder` misconfigurations cause this error.

### Fix

- Create a `templates/` directory and place `index.html` inside.
- If using blueprints, ensure their `template_folder` is correctly set or use absolute paths.

#### Wrong code

```python
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.htm")  # wrong filename
```

#### Fixed code

```python
from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
```
