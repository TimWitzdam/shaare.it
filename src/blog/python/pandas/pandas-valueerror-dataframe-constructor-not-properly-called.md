---
title: "ValueError: DataFrame constructor not properly called!"
description: "Raised when pd.DataFrame gets data with an unexpected shape or type. How to pass proper data to the constructor."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: DataFrame constructor not properly called!

```bash
$ python - <<'PY'
import pandas as pd
pd.DataFrame(1)
PY
Traceback (most recent call last):
  File "<string>", line 3, in <module>
ValueError: DataFrame constructor not properly called!
```

### Why this happens

This error happens when the `DataFrame` constructor receives a parameter that pandas doesn't recognize as a valid set of data to build rows and columns from — for example, a simple scalar, a generator that yields non-uniform results, or a nested structure with inconsistent lengths.

Common causes:

- Passing a scalar (e.g., `1`) without specifying `index` and `columns`.
- A generator or iterator that yields non-uniform items.
- Accidentally passing parameters in the wrong order.

### Fix

Pass an iterable of rows, a dict of arrays, or specify `index`/`columns` when passing scalar data. Convert generators to lists first to check their content.

#### Wrong code

```python
import pandas as pd
# scalar by itself
pd.DataFrame(1)  # raises ValueError

# incorrect object structure (non-uniform lengths)
bad = [{"a": 1}, {"a": 2, "b": 3}]
pd.DataFrame(bad)  # may raise or produce inconsistent DataFrame
```

#### Fixed code

```python
import pandas as pd
# pass an iterable of row-like objects
pd.DataFrame([1, 2, 3], columns=["x"])  # explicit column to accept list of scalars

# Use dict-of-lists for columns
pd.DataFrame({"a": [1, 2], "b": [3, 4]})

# Convert generator to list first
def gen():
    for i in range(3):
        yield {"a": i}

rows = list(gen())
pd.DataFrame(rows)
```

Notes:

- If you really want a DataFrame from a scalar value, pass `index` and `columns` explicitly: `pd.DataFrame(1, index=[0], columns=["x"])`.
- Use `pd.DataFrame.from_records` or `pd.DataFrame.from_dict` if you have structured data.
