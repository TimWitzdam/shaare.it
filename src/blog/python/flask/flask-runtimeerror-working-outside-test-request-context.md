---
title: "RuntimeError: Working outside of test request context"
description: "Using request-dependent code in tests without creating a test request context."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: Working outside of test request context

```bash
$ pytest -q
Traceback (most recent call last):
  File "tests/test_views.py", line 22, in test_profile
    token = request.headers.get('Authorization')
RuntimeError: Working outside of request context.
```

### Why this happens

Flask binds `request`, `session`, and other context locals to the active request. In tests, if you call code that expects a request but your test didn’t create one, Flask raises this runtime error. It often happens when helpers reach into `request` or `current_app` without a context in place.

### Fix

Use `app.test_request_context()` or the test client to create a request context before accessing request-bound objects. Wrap such code in `with` blocks or refactor helpers to accept explicit parameters instead of touching globals.

#### Wrong code

```python
# tests/test_views.py
from yourapp import app
from flask import request

def test_profile():
    # No context created
    assert request.headers.get('Authorization') is None
```

#### Fixed code

```python
# tests/test_views.py
from yourapp import app

def test_profile():
    with app.test_request_context('/profile', headers={'Authorization': 'Bearer t'}):
        from flask import request
        token = request.headers.get('Authorization')
        assert token.startswith('Bearer ')

# Or use the test client, which automatically manages request context

def test_profile_client():
    with app.test_client() as client:
        res = client.get('/profile', headers={'Authorization': 'Bearer t'})
        assert res.status_code in (200, 401)
```

### Notes

- Prefer refactoring helpers to accept `request` or header values as function parameters.
- Use `app.app_context()` when code needs `current_app` but not a request.
