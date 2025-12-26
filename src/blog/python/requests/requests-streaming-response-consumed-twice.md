---
title: "Streaming Response Consumed Twice"
description: "Trying to read a streamed response twice leads to empty data or StreamConsumedError in Requests."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Streaming response consumed twice

```bash
$ python -c "import requests; r=requests.get('https://example.com/large', stream=True); _=r.content; _=r.content"
Traceback (most recent call last):
  ...
requests.exceptions.StreamConsumedError: The content for this response was already consumed
```

### Why this happens

Streamed bodies are one-shot; after reading, buffer is consumed.

### Fix

Read once; or disable stream to buffer automatically.

#### Wrong code

```python
import requests
r = requests.get('https://example.com/large', stream=True)
_ = r.content
_ = r.content
```

#### Fixed code

```python
import requests
r = requests.get('https://example.com/large', stream=False, timeout=10)
body = r.content
```
