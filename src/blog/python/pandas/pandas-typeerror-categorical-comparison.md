---
title: "TypeError: Comparing Categorical with incompatible types or unordered categories"
description: "Why comparisons on `Categorical` may raise TypeError (unordered categories, incompatible types) and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## TypeError: Comparing Categorical with incompatible types or unordered categories

```bash
$ python -c "import pandas as pd; s = pd.Series(pd.Categorical(['a','b'])); s > 'a'"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: Unordered Categoricals can only compare equality with other categories
```

### Why this happens

`Categorical` values behave differently from ordinary strings/integers. If a `Categorical` is unordered, relational comparisons like `>` or `<` are not defined and raise `TypeError`. Also comparing categoricals with different categories or comparing a categorical to non-categorical values without coercion may raise errors.

### Fix

Either convert to a comparable dtype (`str`, numeric), make the `Categorical` ordered, or use `cat.codes` (if the codes align meaningfully). Also ensure both sides of the comparison are comparable.

#### Wrong code

```python
import pandas as pd
ser = pd.Series(pd.Categorical(['a','b']))
# This raises a TypeError because the categorical is unordered
ser > 'a'
```

#### Fixed code

```python
import pandas as pd
ser = pd.Series(pd.Categorical(['a','b']))
# Option 1: compare by string values
ser.astype(str) > 'a'

# Option 2: make the category ordered and then compare
ser_ord = pd.Series(pd.Categorical(['a','b'], categories=['a','b'], ordered=True))
ser_ord > 'a'

# Option 3: compare using codes (numeric representation)
ser.cat.codes > 0  # numeric comparison using category codes
```
