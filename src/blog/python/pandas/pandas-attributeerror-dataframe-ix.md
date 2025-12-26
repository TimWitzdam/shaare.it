---
title: "AttributeError: 'DataFrame' object has no attribute 'ix'"
description: "Why DataFrame.ix is removed (or deprecated) and how to migrate to .loc and .iloc."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## AttributeError: 'DataFrame' object has no attribute 'ix'

```bash
$ python - <<'PY'
import pandas as pd

df = pd.DataFrame({'a': [1, 2], 'b': [3, 4]})
# code ported from older pandas that uses .ix
print(df.ix[0, 'a'])
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
AttributeError: 'DataFrame' object has no attribute 'ix'
```

### Why this happens

The `.ix` indexer was deprecated and removed in modern versions of pandas. It mixed label-based and positional indexing which caused ambiguity. Newer pandas versions removed it to encourage the explicit `.loc` (label-based) and `.iloc` (position-based) indexers.

### Fix

Decide whether you need label-based (use `.loc`) or position-based (use `.iloc`) indexing. Replace `.ix` with `.loc` when you expect labels; replace `.ix` with `.iloc` for integer-position-based indexing.

#### Wrong code

```python
# Old / removed indexer (deprecated / removed in newer pandas versions)
value = df.ix[0, 'a']
```

#### Fixed code

```python
# If `0` is an index label
value = df.loc[0, 'a']

# If you want the first row by position
value = df.iloc[0]['a']
# or value = df.iloc[0, df.columns.get_loc('a')]
```

If the code used mixed semantics (labels and positions), make the behavior explicit. This removes ambiguity and future-proofs your code.
