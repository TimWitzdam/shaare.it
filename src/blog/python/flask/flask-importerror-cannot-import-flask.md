---
title: "ImportError: cannot import name 'Flask' from 'flask'"
description: "Why Flask import errors happen and how to fix them."
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

- The `flask` package isn’t installed in the active environment, or a different Python interpreter is being used.
- A local file or folder named `flask.py` or `flask/` shadows the real package.
- Partial installs or version conflicts (e.g., mixing `flask` and `Flask` capitalization on case-sensitive filesystems) cause resolution issues.
- Corrupted virtual environment or missing dependencies.

### Fix

- Ensure Flask is installed in the current environment and you're using the right interpreter.
- Remove or rename any local `flask.py` or `flask/` directory.
- Reinstall Flask to repair a broken install.

#### Wrong code

```python
# Local file named flask.py in the same directory
from flask import Flask
app = Flask(__name__)  # ImportError due to shadowing
```

#### Fixed code

```python
# Rename local file to avoid shadowing, e.g. app_main.py
from flask import Flask

app = Flask(__name__)

@app.get("/")
def index():
    return "Hello"

if __name__ == "__main__":
    app.run(debug=True)
```
