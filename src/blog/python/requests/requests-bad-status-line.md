---
title: "Bad status line"
description: "Invalid HTTP status line from server causes parsing failure."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Bad status line

```bash
$ python -c "import requests; requests.get('http://badhttp.example.com')"
Traceback (most recent call last):
  ...
urllib3.exceptions.ProtocolError: ('Connection aborted.', BadStatusLine('XYZ'))
```

### Why this happens

Server speaks a non-HTTP protocol or is misconfigured, returning garbage instead of `HTTP/1.1 200 OK`.

### Fix

- Fix the server or use the correct protocol/client.

#### Wrong code

```python
import requests
requests.get("http://tcp-service.example.com")
```

#### Fixed code

```python
# Use the appropriate client for the protocol
import socket
s = socket.create_connection(("tcp-service.example.com", 9000))
s.sendall(b"HELLO\n")
print(s.recv(1024))
```
