---
title: "TypeError: debug must be a boolean"
description: "Misconfigured debug flag in app.run or config causes a TypeError; learn correct types and usage."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: debug must be a boolean

```bash
$ python -c "from flask import Flask; app=Flask(__name__); app.run(debug='yes')"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: debug must be a boolean
```

### Why this happens

Flask expects `debug` to be a boolean (`True`/`False`). Passing strings, integers, or other types triggers a `TypeError`. This often occurs when loading environment variables as strings and forgetting to convert them to booleans.

### Fix

Convert your configuration values to the correct types and pass booleans to `app.run(debug=...)`. Use `FLASK_DEBUG=1` with `flask run` for CLI-driven debug, or set `app.config["DEBUG"] = True` appropriately.

#### Wrong code

```python
from flask import Flask

app = Flask(__name__)

# ❌ debug as string
app.run(debug="true")
```

#### Fixed code

```python
from flask import Flask

app = Flask(__name__)

# ✅ debug as boolean
app.run(debug=True)
```

### Additional notes

- When using environment variables: `debug = os.getenv("DEBUG", "0") == "1"`.
- Don’t enable debug in production; it exposes the interactive debugger.
- Prefer the `FLASK_ENV=development` or `FLASK_DEBUG=1` CLI flags for convenient switching.
