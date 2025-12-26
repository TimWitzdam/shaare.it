---
title: "OSError: [Errno 13] Permission denied when binding to port"
description: "Attempting to run Flask on a privileged port without permissions."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## OSError: Permission denied on port

```bash
$ flask --app app.py run -h 0.0.0.0 -p 80
OSError: [Errno 13] Permission denied
```

### Why this happens

On Unix-like systems, ports below 1024 require elevated privileges. Running Flask on port 80 or 443 without appropriate permissions triggers `Permission denied`.

### Fix

Use a high port (e.g., 8000) during development, or run behind a reverse proxy (nginx) that listens on 80/443 and forwards to your Flask app. Avoid running your app with `sudo`—it’s unsafe.

#### Wrong code

```python
# run.sh
flask --app app.py run -p 80
```

#### Fixed code

```python
# run.sh
flask --app app.py run -p 8000
# In production, use a real WSGI server (gunicorn/uwsgi) behind nginx.
```

### Notes

- For containers, expose 80 externally while your app listens on an unprivileged internal port.
- Security first: don’t grant root privileges to your dev server.
