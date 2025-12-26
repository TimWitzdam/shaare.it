---
title: "Async usage error with Requests"
description: "Using Requests in asyncio without threads blocks the event loop."
date: 2025-12-07
tags: ["python", "requests", "errors"]
---

## Async usage error

```bash
$ python -c "import asyncio, requests; async def main(): requests.get('https://example.com'); asyncio.run(main())"
# Event loop blocked; timeouts/unresponsiveness
```

### Why this happens

Requests is sync; running it in the event loop blocks other tasks.

### Fix

- Use `httpx`/`aiohttp` for async or run Requests in a thread executor.

#### Wrong code

```python
import asyncio, requests
async def main():
    requests.get("https://example.com")
asyncio.run(main())
```

#### Fixed code

```python
import asyncio, requests
async def main():
    loop = asyncio.get_running_loop()
    resp = await loop.run_in_executor(None, requests.get, "https://example.com")
    print(resp.status_code)
asyncio.run(main())
```
