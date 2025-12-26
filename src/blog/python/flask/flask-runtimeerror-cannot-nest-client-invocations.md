---
title: "RuntimeError: Cannot nest client invocations (testing)"
description: "Use Flask test client context managers correctly—avoid nested invocations in tests."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## RuntimeError: cannot nest client invocations

```bash
$ pytest
RuntimeError: Cannot nest client invocations
```

### Why this happens

Using the test client inside another active client context causes nesting that Flask forbids. Each `with app.test_client() as client:` block must complete before starting another.

### Fix

- Avoid nesting client contexts. Create one client per test scope.

#### Wrong code

```python
with app.test_client() as c1:
    with c1:  # nested
        c1.get('/')
```

#### Fixed code

```python
with app.test_client() as client:
    client.get('/')
```
