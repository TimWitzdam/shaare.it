---
title: "TypeError: teardown_request must accept an exception argument"
description: "Teardown handlers must accept an exception parameter; wrong signatures raise TypeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: teardown_request must accept an exception argument

```bash
$ python -c "from flask import Flask; app=Flask(__name__); @app.teardown_request\ndef td(): pass"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: teardown_request functions must accept one positional argument: exception
```

### Why this happens

Flask calls teardown handlers with one positional argument: the exception (or `None`). Defining a handler without the parameter leads to `TypeError` during teardown.

### Fix

Define handlers that accept the `exception` argument even if you ignore it.

#### Wrong code

```python
from flask import Flask

app = Flask(__name__)

@app.teardown_request
def cleanup():
    # ❌ missing exception param
    pass
```

#### Fixed code

```python
from flask import Flask

app = Flask(__name__)

@app.teardown_request
def cleanup(exception):
    # ✅ receive exception or None
    # perform cleanup regardless
    pass
```

### Additional notes

- Teardown runs after each request, successful or error.
- Use it for closing DB connections or releasing resources.
- Exceptions are not suppressed; they propagate unless handled elsewhere.
