---
title: "Session not thread-safe"
description: "Sharing a Session across threads without care causes race conditions."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Session not thread-safe

```bash
$ python -c "import threading, requests; s=requests.Session(); [threading.Thread(target=lambda: s.get('https://example.com')).start() for _ in range(10)]"
# Possible race conditions or weird behavior
```

### Why this happens

`Session` maintains connection pool and state; concurrent access can race without proper locking.

### Fix

- Use separate sessions per thread or add locking.

#### Wrong code

```python
import threading, requests
session = requests.Session()
for _ in range(10):
    threading.Thread(target=lambda: session.get("https://example.com")).start()
```

#### Fixed code

```python
import threading, requests

def worker():
    with requests.Session() as s:
        s.get("https://example.com")

threads = [threading.Thread(target=worker) for _ in range(10)]
for t in threads:
    t.start()
for t in threads:
    t.join()
```
