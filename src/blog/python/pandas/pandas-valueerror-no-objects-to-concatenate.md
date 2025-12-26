---
title: "ValueError: No objects to concatenate"
description: "Raised when calling pd.concat with an empty list or iterable — how to guard and fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: No objects to concatenate

```bash
$ python - <<'PY'
import pandas as pd

print(pd.concat([]))
PY
Traceback (most recent call last):
  File "<string>", line 4, in <module>
ValueError: No objects to concatenate
```

### Why this happens

`pd.concat` expects a non-empty list (or other iterable) of DataFrames, Series, or similar array-like objects. If you pass an empty list (or an iterable that yields no items), pandas has nothing to concatenate and raises this error.

Common causes:

- Building a list of frames in a loop but never appending any frames due to filters or logic errors.
- Using a generator expression that yields nothing.

### Fix

Check the input before calling `pd.concat`. Use a conditional or provide a default fallback (like an empty DataFrame). Build a list of frames then call `pd.concat` once.

#### Wrong code

```python
import pandas as pd

frames = []
# frames is empty for some reason (filtering or loop condition)
combined = pd.concat(frames)  # raises ValueError
```

#### Fixed code

```python
import pandas as pd

frames = []
# Populate frames in a loop, or guard before concatenation
if frames:
    combined = pd.concat(frames, ignore_index=True)
else:
    combined = pd.DataFrame()  # or other sensible default

# Optionally, collect frames and concat once for performance
frames = [pd.DataFrame({'a':[1]}), pd.DataFrame({'a':[2]})]
combined = pd.concat(frames, ignore_index=True)
```

Optional tips:

- If you build frames from a generator, convert it to a list first: `frames = list(gen)` and then check `if not frames`.
