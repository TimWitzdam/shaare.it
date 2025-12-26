---
title: "TypeError: DataFrame.to_json(lines=True) and non-serializable objects"
description: "How to handle errors when using DataFrame.to_json(lines=True) with non JSON-serializable objects (timestamps, custom types)."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: DataFrame.to_json(lines=True) and non-serializable objects

```bash
$ python - <<'PY'
import pandas as pd
from datetime import datetime
df = pd.DataFrame({'t': [datetime.now()]})
df.to_json('out.json', orient='records', lines=True)
PY
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: Object of type datetime is not JSON serializable
```

### Why this happens

`to_json(..., lines=True)` serializes each row to a JSON object. The default JSON encoder in Python cannot handle some types like `datetime`, `date`, `numpy` dtypes, or custom objects, which leads to `TypeError: Object of type ... is not JSON serializable`.

### Fix

Convert columns into JSON-serializable types first. For dates/times, use `dt.isoformat()` or `astype(str)` or specify a conversion before serializing. For complex objects, provide a serializer or convert to a primitive representation.

#### Wrong code

```python
import pandas as pd
from datetime import datetime
df = pd.DataFrame({'t': [datetime.now()]})
# Raises TypeError because datetime isn't JSON serializable by default
df.to_json(orient='records', lines=True)
```

#### Fixed code

```python
import pandas as pd
from datetime import datetime
df = pd.DataFrame({'t': [datetime.now()]})
# Convert datetimes to ISO strings first
df['t'] = df['t'].dt.strftime('%Y-%m-%dT%H:%M:%S')
df.to_json(orient='records', lines=True)

# Or convert to string implicitly
df['t'] = df['t'].astype(str)
df.to_json(orient='records', lines=True)
```
