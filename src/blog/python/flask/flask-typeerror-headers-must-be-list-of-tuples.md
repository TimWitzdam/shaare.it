---
title: "TypeError: headers must be a list of (key, value) tuples"
description: "Constructing valid Flask responses with correct headers format to avoid TypeError and subtle client issues."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: headers must be a list of (key, value) tuples

```bash
$ python - <<'PY'
from flask import Flask, make_response
app = Flask(__name__)
@app.route('/')
def idx():
    resp = make_response('ok')
    resp.headers = {'X': '1'}  # Wrong type
    return resp
with app.test_client() as c:
    r = c.get('/')
    print(r.status_code)
PY
500
```

### Why this happens

Flask/Werkzeug expects response headers to behave like a case-insensitive multi-dict. Assigning a plain dict to `resp.headers` or passing an invalid structure into `Response` can trigger `TypeError`. This often happens when replacing the headers object instead of modifying it in place, or when constructing a response tuple incorrectly.

### Fix

- Modify headers via `resp.headers['Key'] = 'Value'` or pass a list of 2-tuples (`[("Key", "Value")]`).
- Use `return 'ok', 200, {'X': '1'}` which Flask converts correctly.
- Don’t replace `resp.headers` with a dict; mutate the existing object.

#### Wrong code

```python
resp = make_response('ok')
resp.headers = {'X': '1'}
```

#### Fixed code

```python
resp = make_response('ok')
resp.headers['X'] = '1'
# or
return 'ok', 200, [('X', '1')]
```

When constructing complex responses, prefer mutation or proper tuple formats to keep headers valid and avoid `TypeError`.
