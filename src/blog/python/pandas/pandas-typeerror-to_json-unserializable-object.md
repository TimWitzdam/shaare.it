---
title: "TypeError: Object is not JSON serializable when calling to_json"
description: "Why `TypeError: Object of type X is not JSON serializable` happens when DataFrame.to_json or json.dumps encounters non-serializable objects and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: Object of type X is not JSON serializable

```bash
$ python - <<'PY'
import pandas as pd

class NotJSON:
    def __repr__(self):
        return "NotJSON()"

# DataFrame with an unserializable object
df = pd.DataFrame({'col': [NotJSON()]})
# This will raise when serializing
df.to_json()
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: Object of type NotJSON is not JSON serializable
```

### Why this happens

`DataFrame.to_json()` uses Python's JSON serialization rules (similar to `json.dumps`). Objects that are not basic JSON types (strings, numbers, lists, dicts, booleans, None) will not be serializable and cause a `TypeError`.

### Fix

Convert or map custom objects to JSON-friendly types (strings, dicts, primitives) before calling `to_json()`. If you control the serialization step with `json.dumps`, you can pass a `default` function to handle unknown objects—however `DataFrame.to_json()` doesn't accept a `default` directly, so convert values in the DataFrame upfront.

#### Wrong code

```python
class Foo:
    pass

df = pd.DataFrame({'a': [Foo()]})
# Raises TypeError
print(df.to_json())
```

#### Fixed code

```python
# Option 1: Convert objects to strings
import json

df['a'] = df['a'].apply(lambda x: str(x))
print(df.to_json())

# Option 2: If objects have a dict-like representation, convert them
# E.g. df['a'] = df['a'].apply(lambda x: x.to_dict())

# Option 3: Use json.dumps on a converted structure with a custom default
data = df.to_dict(orient='records')
print(json.dumps(data, default=lambda o: str(o)))
```

Convert or drop the problematic column before serialization if converting isn't straightforward.
