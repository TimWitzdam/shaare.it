---
title: "TypeError: 'slice' object cannot be interpreted as an integer"
description: "This TypeError usually comes from passing slice objects into functions expecting integer arguments when working with NumPy/Pandas."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: 'slice' object cannot be interpreted as an integer

```bash
$ python -c "import numpy as np; np.zeros(slice(3))"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: 'slice' object cannot be interpreted as an integer
```

### Why this happens

A `slice` object (e.g., `slice(1, 3)` or constructed via `:`) is used to indicate ranges, not numerical integer values. Passing a `slice` into an API that expects an integer (such as shape/size-int arguments) raises this TypeError. With Pandas you will encounter this when building arrays, using numpy functions, or passing results to pandas methods incorrectly.

### Fix

Pass integers where integers are expected. If you're trying to pick ranges from a DataFrame/Series, use slicing directly on the object rather than passing a `slice` to a function that expects an integer.

#### Wrong code

```python
import numpy as np

# Attempt to create an array where the size argument is a slice (invalid)
np.zeros(slice(3))
```

#### Fixed code

```python
import numpy as np

# Use integer sizes for numpy array shapes
np.zeros(3)

# Use slicing in indexing contexts where it's expected
import pandas as pd

df = pd.DataFrame({'a': [10, 20, 30, 40]})
print(df[1:3])  # this uses slice syntax and works
```
