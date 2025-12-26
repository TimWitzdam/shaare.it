---
title: "TypeError: unhashable type: 'list'"
description: "Using lists (or other unhashable types) as keys where a hashable type is expected in Pandas workflows."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: unhashable type: 'list'

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1,2]}); df['b'] = df['a'].map({[1,2]: 'x'})"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: unhashable type: 'list'
```

### Why this happens

Python dict keys and set members must be hashable (immutable). Lists are mutable and therefore not hashable. In Pandas, you'll commonly hit this when passing a list as a key for `map`, `replace`, or when attempting to use lists as keys in dictionaries for value mapping.

### Fix

Use tuples instead of lists as keys (tuples are hashable), or convert the lists to an immutable type. If you're trying to perform a membership test, use set membership or vectorized operations instead.

#### Wrong code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# Using a list as a dict key for map -> TypeError: unhashable type: 'list'
df['b'] = df['a'].map({[1,2]: 'x'})
```

#### Fixed code

```python
import pandas as pd

df = pd.DataFrame({'a': [1, 2]})
# Use tuples as keys (hashable)
df['b'] = df['a'].map({(1,2): 'x'})

# If you meant to map individual values, map should have integer keys
# Correct usage to map single values:
df['b'] = df['a'].map({1: 'one', 2: 'two'})

# If you need to map by lists, convert to string or tuple, or use a merge/join approach
# Example: create a mapping DataFrame and join on the appropriate key
```
