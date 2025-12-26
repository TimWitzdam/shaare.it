---
title: "ImportError: cannot import name 'Flask' from 'flask'"
description: "Why importing the Flask class can fail: shadowing, environment issues, and broken installations—and how to fix them."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ImportError: cannot import name 'Flask' from 'flask'

```bash
$ python -c "from flask import Flask"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: cannot import name 'Flask' from 'flask' (unknown location)
```

### Why this happens

- A local `flask.py` file or `flask/` package shadows the real Flask installation.
- Flask isn’t installed in the active environment, or you’re using the wrong interpreter.
- Corrupted installation or mismatched versions after partial upgrades.

### Fix

- Rename/remove local `flask.py/flask/` that shadows the package.
- Activate the correct venv and ensure Flask is installed.
- Reinstall Flask cleanly.

#### Wrong code

```python
# project layout
./flask.py  # shadows package
from flask import Flask
app = Flask(__name__)
```

#### Fixed code

```python
# project layout (no shadowing)
from flask import Flask
app = Flask(__name__)
```

Environment sanity:

```bash
python -m pip install --upgrade --force-reinstall Flask
python -c "import flask, sys; print(flask.__file__, sys.executable)"
```

Verify you’re importing from the site-packages path of your intended interpreter.
