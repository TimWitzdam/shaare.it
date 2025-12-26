---
title: "SynchronousOnlyOperation: async usage in sync context"
description: "Calling async code or channels consumers incorrectly from sync Django views raises SynchronousOnlyOperation."
date: 2025-12-07
tags: ["python", "django", "errors"]
---

## SynchronousOnlyOperation: async in sync

```bash
$ python - <<'PY'
import asyncio
async def a(): return 1
try:
    a()
except Exception as e:
    print(type(e).__name__, e)
PY
RuntimeWarning coroutine 'a' was never awaited
```

### Why this happens

You invoked async ORM or async functions directly in a sync view.

### Fix

Use `async def` views with ASGI or wrap with `async_to_sync` where appropriate.

#### Wrong code

```python
result = async_func()
```

#### Fixed code

```python
from asgiref.sync import async_to_sync
result = async_to_sync(async_func)()
```
