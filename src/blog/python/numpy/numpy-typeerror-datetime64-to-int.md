---
title: "TypeError: Cannot convert numpy.datetime64 to int / int() argument must be a string or a number"
description: "Problems converting datetime64 values to integers or using them as numeric indices."
date: 2025-12-07
tags: ["python", "numpy", "errors"]
---

## TypeError: Cannot convert numpy.datetime64 to int / int() argument must be a string or a number

```bash
$ python - <<'PY'
import numpy as np
int(np.datetime64('2020-01-01'))
PY
Traceback (most recent call last):
  File "<string>", line 2, in <module>
TypeError: int() argument must be a string, a bytes-like object or a number, not 'numpy.datetime64'
```

### Why this happens

A `numpy.datetime64` represents an absolute point in time and includes a time unit (e.g., 'ns', 's'). It isn't directly convertible to a Python integer without specifying a unit. Unlike `datetime` objects, `numpy.datetime64` does not implement an implicit conversion to Python `int`.

### Fix

To get an integer representation (such as the timestamp since epoch), first cast the `datetime64` to a specific time unit and then convert to an integer dtype, e.g. `astype('int64')`. Alternatively, convert to a Python `datetime` object and use `.timestamp()`.

#### Wrong code

```python
import numpy as np
int(np.datetime64('2020-01-01'))  # raises TypeError

# Or trying to use a datetime64 as an array index
arr = np.arange(10)
arr[np.datetime64('2020-01-01')]  # raises TypeError
```

#### Fixed code

```python
import numpy as np
# Convert to numeric timestamp in seconds
ts = np.datetime64('2020-01-01').astype('datetime64[s]').astype('int64')
print(ts)  # e.g., 1577836800

# Or convert to Python datetime and use timestamp
import datetime
py_dt = np.datetime64('2020-01-01').astype('datetime64[s]').tolist()
print(int(py_dt.timestamp()))

# Use numeric index by converting appropriately
arr = np.arange(10)
idx = 2
print(arr[idx])  # when you need to index arrays, use integer indices
```
