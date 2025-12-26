---
title: "TypeError: template context must be a dict"
description: "Passing non-dict context to render_template raises TypeError; learn correct usage."
date: 2025-12-07
tags: ["python", "flask", "errors"]
---

## TypeError: template context must be a dict

```bash
$ python -c "from flask import Flask, render_template_string; app=Flask(__name__); render_template_string('{{x}}', 123)"
Traceback (most recent call last):
  File "<string>", line 1, in <module>
TypeError: render_template_string() takes 1 positional argument but 2 were given
```

### Why this happens

`render_template` and `render_template_string` accept keyword arguments for context or a dict via unpacking. Passing positional non-dict values or trying to feed lists triggers errors.

### Fix

Pass variables as keyword args or a dict using `**context`.

#### Wrong code

```python
from flask import Flask, render_template_string

app = Flask(__name__)

render_template_string("{{x}}", [1, 2, 3])  # ❌
```

#### Fixed code

```python
from flask import Flask, render_template_string

app = Flask(__name__)

render_template_string("{{x}}", x=123)  # ✅ keyword arg

# Or
ctx = {"x": 123}
render_template_string("{{x}}", **ctx)  # ✅ dict unpacking
```

### Additional notes

- For `render_template`, pass `render_template('page.html', user=user)`.
- Jinja2 will escape variables by default unless marked safe.
- Keep context small and explicit to improve readability.
