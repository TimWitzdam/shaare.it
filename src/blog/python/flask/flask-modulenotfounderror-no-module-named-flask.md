---
title: "ModuleNotFoundError: No module named 'flask'"
description: "Diagnosing missing Flask module errors and resolving environment issues."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## ModuleNotFoundError: No module named 'flask'

```bash
$ python -c "import flask"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ModuleNotFoundError: No module named 'flask'
```

### Why this happens

- Flask isn’t installed in the active Python environment.
- You're using a different interpreter from the one where Flask was installed.
- Virtual environment not activated; system Python is used instead.

### Fix

- Install Flask in the correct environment and activate it before running.
- Verify which Python interpreter your tooling uses and align them.

#### Wrong code

```python
# Running with system Python that lacks Flask
import flask
from flask import Flask
app = Flask(__name__)
```

#### Fixed code

```python
# After installing and activating the correct virtual environment
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, Flask!"

if __name__ == "__main__":
    app.run()
```
