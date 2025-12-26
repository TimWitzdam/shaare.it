---
title: "OSError: [Errno 98] Address already in use"
description: "Why Flask fails to bind to a port and how to free or change the port, handle debug reloader, and avoid conflicts."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## OSError: [Errno 98] Address already in use

```bash
$ flask run --port 5000
* Serving Flask app 'app'
* Debug mode: off
OSError: [Errno 98] Address already in use
```

### Why this happens

Another process is already bound to the requested port (often a previous Flask app with the reloader, or a system service). On Linux, sockets can linger in `TIME_WAIT`, but typically the culprit is an active process.

### Fix

- Kill the process using the port or choose a different port.
- Avoid double-running with the debug reloader; ensure only one server instance.
- On development, use `--port` to change the port or configure the app to run on a free port.

#### Wrong code

```bash
# Starting multiple instances
flask run &
flask run &
```

#### Fixed code

```bash
# Find and kill process on 5000
lsof -i :5000
kill -9 <PID>

# Or change port
flask run --port 5001
```

Programmatic run:

```python
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001)
```

Ensure a single server instance and pick a free port to avoid `OSError`.
