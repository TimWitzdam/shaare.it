---
title: "ValueError: ColumnTransformer unknown column name"
description: "Resolve mismatched or missing column names in ColumnTransformer selections."
date: 2025-12-07
tags: ["python", "scikit-learn", "errors"]
---

## ValueError: unknown column in ColumnTransformer

```bash
$ python -c "from sklearn.compose import ColumnTransformer; from sklearn.preprocessing import StandardScaler; import pandas as pd; X=pd.DataFrame({'a':[1],'b':[2]}); ColumnTransformer([('num', StandardScaler(), ['c'])]).fit(X)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ValueError: A given column is not a column of the dataframe
```

### Why this happens

Selecting a column that doesn’t exist in the input DataFrame causes this error.

### Fix

Ensure column names match the DataFrame or update the transformer selections.

#### Wrong code

```python
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler
import pandas as pd
X = pd.DataFrame({'a':[1],'b':[2]})
ct = ColumnTransformer([('num', StandardScaler(), ['c'])])
ct.fit(X)
```

#### Fixed code

```python
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import StandardScaler
import pandas as pd
X = pd.DataFrame({'a':[1],'b':[2]})
ct = ColumnTransformer([('num', StandardScaler(), ['a','b'])])
ct.fit(X)
```
