---
title: "Invalid chunk encoding in HTTP response"
description: "Server sends malformed chunked transfer-encoding and Requests fails to decode."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Invalid chunk encoding

```bash
$ python -c "import requests; requests.get('http://badchunk.example.com', stream=True).raw.read()"
Traceback (most recent call last):
  ...
urllib3.exceptions.ProtocolError: ('Connection aborted.', InvalidChunkLength(got_length=b'ZZ', expected=hex))
```

### Why this happens

The server violates HTTP/1.1 chunked transfer-encoding format. Clients cannot parse non-hex chunk sizes or malformed trailers.

### Fix

- Fix server to emit valid chunk sizes and trailers.
- Avoid `stream=True` if server is known broken; let Requests buffer and possibly recover.

#### Wrong code

```python
import requests
resp = requests.get("http://badchunk.example.com", stream=True)
print(resp.raw.read())  # triggers decode error
```

#### Fixed code

```python
import requests
# Prefer non-streamed reads when server is flaky
resp = requests.get("http://good.example.com")
print(len(resp.content))
```
