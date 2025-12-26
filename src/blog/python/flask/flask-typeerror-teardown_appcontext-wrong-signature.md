---
title: "TypeError: teardown_appcontext wrong signature"
description: "teardown_appcontext handlers must accept an optional exception argument."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: teardown_appcontext wrong signature

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 18, in <module>
    @app.teardown_appcontext
TypeError: teardown_appcontext handlers must accept (exception)
```

### Why this happens

`teardown_appcontext` functions receive an exception argument (which may be `None`) indicating whether an error occurred. If the handler signature doesn’t accept this parameter, Flask raises `TypeError` when calling it.

### Fix

Define the handler to accept a single argument, even if you don’t use it.

#### Wrong code

```python
from flask import Flask
app = Flask(__name__)

@app.teardown_appcontext
def cleanup():
    pass
```

#### Fixed code

```python
from flask import Flask
app = Flask(__name__)

@app.teardown_appcontext
def cleanup(exception):
    # free resources regardless of exception
    pass
```

### Tip

Use `teardown_appcontext` for app-wide cleanup (DB connections, caches). For per-request cleanup, use `teardown_request` with a similar signature.
