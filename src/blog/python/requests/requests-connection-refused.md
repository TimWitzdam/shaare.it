---
title: "ConnectionError: [Errno 111] Connection refused"
description: "The remote host actively refused the TCP connection."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Connection refused

```bash
$ python -c "import requests; requests.get('http://localhost:9999')"
Traceback (most recent call last):
  ...
requests.exceptions.ConnectionError: HTTPConnectionPool(host='localhost', port=9999): Max retries exceeded with url: / (Caused by NewConnectionError('<urllib3.connection.HTTPConnection object at ...>: Failed to establish a new connection: [Errno 111] Connection refused'))
```

### Why this happens

No server is listening on the target port, or a firewall rejects the connection.

### Fix

- Start the service on the expected port.
- Check firewall rules and ensure the port is open.

#### Wrong code

```python
import requests
# Calls a port where nothing is listening
requests.get("http://localhost:9999")
```

#### Fixed code

```python
import requests
# Use the correct port the service listens on
response = requests.get("http://localhost:8080")
print(response.status_code)
```
