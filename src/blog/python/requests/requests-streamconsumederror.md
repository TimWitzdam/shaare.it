---
title: "requests.exceptions.StreamConsumedError: The content for this response was already consumed"
description: "StreamConsumedError when accessing streamed content multiple times in Requests and safe patterns to read once."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## StreamConsumedError: Content already consumed

```bash
$ python -c "import requests; r = requests.get('https://httpbin.org/stream/1', stream=True); list(r.iter_content()); list(r.iter_content())"
Traceback (most recent call last):
  ...
requests.exceptions.StreamConsumedError: The content for this response was already consumed
```

### Why this happens

Streaming generators can only be iterated once; after consumption, the stream is exhausted.

### Fix

Buffer content to memory/disk if you need multiple passes, or avoid double iteration.

#### Wrong code

```python
import requests
r = requests.get('https://httpbin.org/stream/1', stream=True)
first = list(r.iter_content(1024))
second = list(r.iter_content(1024))  # boom
```

#### Fixed code

```python
import requests
r = requests.get('https://httpbin.org/stream/1', stream=True)
buf = b''.join(r.iter_content(1024))
print(len(buf))
# reuse buf safely
```
