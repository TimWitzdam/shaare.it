---
title: "TypeError: make_response stream must yield bytes"
description: "Streaming responses must yield bytes or strings; mixing types raises TypeError."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: streaming generator must yield bytes

```bash
$ flask --app app.py run
Traceback (most recent call last):
  File "app.py", line 18, in stream
    return Response(gen())
TypeError: Response iterable must yield bytes
```

### Why this happens

Streaming responses in Flask/Werkzeug expect iterables of bytes (or text encoded with a charset). Yielding integers, dicts, or `None` breaks the response iterator contract, triggering `TypeError`.

### Fix

Yield byte strings (`b'...'`) or normal strings (with a proper `mimetype`/charset), and avoid yielding non-serializable objects.

#### Wrong code

```python
from flask import Flask, Response
app = Flask(__name__)

@app.route('/stream')
def stream():
    def gen():
        yield 123
        yield None
    return Response(gen())
```

#### Fixed code

```python
from flask import Flask, Response
app = Flask(__name__)

@app.route('/stream')
def stream():
    def gen():
        yield 'line 1\n'
        yield 'line 2\n'
    return Response(gen(), mimetype='text/plain')
```

### Tip

For JSON streaming, serialize each chunk: `yield json.dumps(obj) + '\n'` and set `mimetype='application/json'`.
