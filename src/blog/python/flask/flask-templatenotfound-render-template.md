---
title: "TemplateNotFound: render_template could not find template"
description: "Why Flask can't locate your Jinja template and how to fix folder structure, names, and app configuration."
date: 2025-12-07
tags: ["python", "flask", "errors"]
featured: true
---

## TemplateNotFound: render_template could not find template

```bash
$ python -c "from flask import Flask, render_template; app = Flask(__name__); with app.app_context(): render_template('missing.html')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
  File "/.../flask/templating.py", line ..., in render_template
  File "/.../jinja2/environment.py", line ..., in get_template
jinja2.exceptions.TemplateNotFound: missing.html
```

### Why this happens

Flask expects templates under a folder named `templates/` relative to your application root or blueprint. If the template isn’t in the expected path, is misnamed, you changed `template_folder` without updating structure, or you’re rendering from within a blueprint with its own template search path, Jinja2 will raise `TemplateNotFound`.

### Fix

- Place templates under `templates/` by default: `yourpkg/templates/…`.
- For Blueprints, store templates under `yourpkg/templates/<blueprint_name>/…` or set `template_folder` accordingly.
- Verify filenames and extensions (`.html`) and case-sensitivity.
- If using a package layout, ensure the app is created with `Flask(__name__, template_folder='templates')` or the default.

#### Wrong code

```python
# app/__init__.py
from flask import Flask
app = Flask(__name__, template_folder='tmpl')  # Mismatch with actual folder name

# Directory actually has: templates/index.html

# app/routes.py
from flask import render_template
from . import app

@app.route('/')
def index():
    return render_template('index.html')  # Will fail: TemplateNotFound
```

#### Fixed code

```python
# app/__init__.py
from flask import Flask
app = Flask(__name__)  # Use default 'templates'

# app/routes.py
from flask import render_template
from . import app

@app.route('/')
def index():
    return render_template('index.html')
```

Blueprint example:

```python
# blog/__init__.py
from flask import Blueprint
blog = Blueprint('blog', __name__, template_folder='templates')

# blog/routes.py
from . import blog
from flask import render_template

@blog.route('/post/<int:id>')
def post(id):
    return render_template('blog/post.html', id=id)

# Project structure
# - app/__init__.py
# - app/templates/index.html
# - blog/templates/blog/post.html
```

Ensure the on-disk structure matches Flask’s search paths.
