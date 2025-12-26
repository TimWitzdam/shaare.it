---
title: "ImportError: DataFrame.to_markdown requires tabulate"
description: "Why DataFrame.to_markdown fails when 'tabulate' isn't installed and how to fix it."
date: 2025-12-07
tags: ["python", "pandas", "errors"]
---

## ImportError: DataFrame.to_markdown requires tabulate

```bash
$ python -c "import pandas as pd; df = pd.DataFrame({'a':[1]}); df.to_markdown()"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
ImportError: Missing optional dependency 'tabulate' - required to use DataFrame.to_markdown
```

### Why this happens

`DataFrame.to_markdown` produces a Markdown-formatted table using the third-party `tabulate` library. If that optional dependency isn't installed, pandas raises `ImportError`.

### Fix

Install `tabulate` with `pip install tabulate`. After installation `df.to_markdown()` will work. Use `pip install 'pandas[all]'` or the specific package to install many optional I/O dependencies.

#### Wrong code

```python
import pandas as pd
df = pd.DataFrame({'a':[1]})
# Fails if `tabulate` is not installed
df.to_markdown()
```

#### Fixed code

```bash
python -m pip install tabulate
```

```python
import pandas as pd
df = pd.DataFrame({'a':[1]})
print(df.to_markdown())
```
