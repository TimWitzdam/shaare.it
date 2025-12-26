---
title: "Thread-Unsafe Shared Session"
description: "Sharing one Requests Session across threads can lead to race conditions and errors."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Thread-unsafe shared Session

```bash
$ python - <<'PY'
import requests, threading
s = requests.Session()
errs = []

def worker(i):
    try: s.get('https://example.com')
    except Exception as e: errs.append(e)

threads = [threading.Thread(target=worker, args=(i,)) for i in range(10)]
[t.start() for t in threads]
[t.join() for t in threads]
print(len(errs))
PY
# May print >0 if session not thread-safe
```

### Why this happens

Session connection pool is not fully thread-safe for concurrent requests.

### Fix

Use one Session per thread or add locking.

#### Wrong code

```python
import requests
s = requests.Session()
# Spawn many threads using s
```

#### Fixed code

```python
import requests, threading

def make_session():
    return requests.Session()

# Each worker owns its Session
```
