---
title: "ValueError: If using all scalar values, you must pass an index"
description: "Creating a DataFrame from scalar values requires an explicit index."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: If using all scalar values, you must pass an index

```bash
$ python -c "import pandas as pd; pd.DataFrame({'a': 1, 'b': 2})"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: If using all scalar values, you must pass an index
```

### Why this happens

Pandas can't infer how many rows to create from scalar values alone. When every value is a scalar (not an iterable), Pandas doesn't know the intended row count. Requiring an explicit index avoids ambiguous constructions.

### Fix

Provide an index (even if it's a single row), convert scalars to iterables of the same length, or use `pd.Series` for a single column.

#### Wrong code

```python
import pandas as pd

# All scalars, Pandas doesn't know how many rows you want
pd.DataFrame({'a': 1, 'b': 2})
```

#### Fixed code

```python
import pandas as pd

# Provide an index to create one row
pd.DataFrame({'a': 1, 'b': 2}, index=[0])

# Or use iterables of equal length
pd.DataFrame({'a': [1], 'b': [2]})

# Or build a Series for a single column
pd.Series({'a': 1, 'b': 2})
```
