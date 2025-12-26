---
title: "ValueError: Categorical categories must be unique"
description: "Why pandas raises ValueError when you provide duplicate categories for a Categorical and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ValueError: Categorical categories must be unique

```bash
$ python - <<'PY'
import pandas as pd

# Attempt to create a Categorical with duplicate categories
pd.Categorical(['a', 'b', 'a'], categories=['a', 'a', 'b'])
PY
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: Categorical categories must be unique
```

### Why this happens

A categorical dtype defines a fixed set of categories. These category labels must be unique — a category cannot be duplicated. pandas enforces this to avoid ambiguity in mapping values to categories.

### Fix

Provide a unique list of categories when creating or setting categories. If you're renaming categories or coercing categories, use `.cat.rename_categories()` or deduplicate your categories list first.

#### Wrong code

```python
# duplicate categories in the list -> ValueError
pd.Categorical(['a', 'b'], categories=['a', 'a', 'b'])
```

#### Fixed code

```python
# unique categories only
pd.Categorical(['a', 'b'], categories=['a', 'b'])

# or deduplicate programmatically
cats = ['a', 'a', 'b']
unique_cats = list(dict.fromkeys(cats))  # preserves order
pd.Categorical(['a', 'b'], categories=unique_cats)

# If renaming existing categories
s = pd.Series(pd.Categorical(['a', 'b']))
s.cat.rename_categories(['x', 'y'])
```

If you need to handle duplicates gracefully, normalize the categories (e.g. by deduplicating or by mapping categories first) before creating the `Categorical`.
