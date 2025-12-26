---
title: "ValueError: Wrong number of items passed (apply returned wrong shape)"
description: "Common mistakes with DataFrame.apply or Series.apply returning arrays/lists with the wrong shape and how to expand them correctly into multiple columns."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: Wrong number of items passed (apply returned wrong shape)

```bash
$ python - <<'PY'
import pandas as pd

df = pd.DataFrame({'x': [1,2,3]})
# Attempt to expand a list into two new columns using apply (incorrect)
df[['a','b']] = df['x'].apply(lambda v: [v, v*2])
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Wrong number of items passed 2, placement implies 1
```

### Why this happens

`Series.apply` returns a `Series` where each element is the list `[v, v*2]`; when you try to assign that directly into two new DataFrame columns (`[['a','b']]`), pandas expects a shape matching the number of rows but also expects a scalar per row when directly assigned this way. The result is a mismatch between the number of items and the placement shape, leading to a `ValueError`.

### Fix

Either return a Series per row using `apply` (so each returned value expands to multiple columns), instruct `apply` to expand results using `result_type='expand'`, or convert the resulting Series of lists into a DataFrame before assignment.

#### Wrong code

```python
# This raises ValueError as shown above
df[['a','b']] = df['x'].apply(lambda v: [v, v*2])
```

#### Fixed code

```python
# Option 1: Use result_type='expand' to auto-expand lists into columns
df[['a', 'b']] = df['x'].apply(lambda v: (v, v*2)).apply(pd.Series)

# Option 2: Convert the Series-of-lists into a DataFrame and assign
df[['a','b']] = pd.DataFrame(df['x'].apply(lambda v: [v, v*2]).tolist(), index=df.index)

# Option 3: Use vectorized operations to avoid apply
df['a'] = df['x']
df['b'] = df['x'] * 2
```

Prefer vectorized solutions where possible — they're clearer and faster than applying Python-level functions row-by-row.
